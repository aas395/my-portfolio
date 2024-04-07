import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  Textarea,
  Link,
  useToast,
} from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";
import { AnimatedHeading } from "../AnimatedHeading";
import { AnimatedContent } from "../AnimatedContent";
import { useEffect } from "react";

const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  subject: yup.string().required("Required"),
  body: yup.string().required().max(2000, "2000 characters max"),
});

type ContactFormSchemaProps = yup.InferType<typeof schema>;

export const Contact = () => {
  const formSettings = useForm<ContactFormSchemaProps>({
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = formSettings;
  const { executeRecaptcha } = useReCaptcha();
  const toast = useToast();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<ContactFormSchemaProps> = async (data) => {
    const token = await executeRecaptcha("form_submit");
    return axios.post("/api/contact", { ...data, token }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Message Sent!",
          description: "I will get back to you shortly.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      } else {
        toast({
          title: "Something went wrong.",
          description: "Please try again later.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    });
  };

  return (
    <PageContainer
      id="contact"
      backgroundImgSrc="/geio-tischler-tQT5KiZSKpE-unsplash.webp"
    >
      <Flex flexDir="column" alignItems="center" alignSelf="center" w="100%">
        <AnimatedHeading>Contact</AnimatedHeading>
        <AnimatedContent>
          <FormProvider {...formSettings}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <Flex flexDir="column" width="100%" gap={4}>
                <FormControl isInvalid={!!errors.name}>
                  <Input
                    {...register("name")}
                    w="100%"
                    placeholder="Name*"
                    backdropFilter="contrast(70%)"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                  <Input
                    {...register("email")}
                    w="100%"
                    placeholder="Email*"
                    backdropFilter="contrast(70%)"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.subject}>
                  <Input
                    {...register("subject")}
                    w="100%"
                    placeholder="Subject*"
                    backdropFilter="contrast(70%)"
                    autoComplete="off"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.body}>
                  <Textarea
                    {...register("body")}
                    w="100%"
                    placeholder="Body*"
                    resize="none"
                    backdropFilter="contrast(70%)"
                  />
                </FormControl>
                <Text fontSize="12px">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <Link
                    href="https://policies.google.com/privacy"
                    textDecoration="underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://policies.google.com/terms"
                    textDecoration="underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  apply.
                </Text>
                <Button type="submit" isDisabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </Flex>
            </form>
          </FormProvider>
        </AnimatedContent>
      </Flex>
    </PageContainer>
  );
};
