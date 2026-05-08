"use client";

import {
  chakra,
  createToaster,
  Field,
  Flex,
  Input,
  Text,
  Textarea,
  Link,
  Toaster,
} from "@chakra-ui/react";

const PlainButton = chakra("button");

const toaster = createToaster({ placement: "bottom-end" });
import { PageContainer } from "../components/PageContainer";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { AnimatedContent } from "../components/AnimatedContent";
import { useEffect } from "react";
import { PageSection } from "../components/PageSection";

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

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<ContactFormSchemaProps> = async (data) => {
    const token = await executeRecaptcha("form_submit");
    return axios.post("/api/contact", { ...data, token }).then((res) => {
      if (res.status === 200) {
        toaster.create({
          title: "Message Sent!",
          description: "I will get back to you shortly.",
          type: "success",
          duration: 9000,
        });
      } else {
        toaster.create({
          title: "Something went wrong.",
          description: "Please try again later.",
          type: "error",
          duration: 9000,
        });
      }
    });
  };

  return (
    <PageContainer id="contact">
      <PageSection backgroundImgSrc="/geio-tischler-tQT5KiZSKpE-unsplash.webp">
        <Flex
          flexDir="column"
          alignItems="center"
          alignSelf="center"
          w="100%"
          h="100vh"
          mt={40}
        >
          <AnimatedHeading>Contact</AnimatedHeading>
          <AnimatedContent>
            <FormProvider {...formSettings}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <Flex flexDir="column" width="100%" gap={4}>
                  <Field.Root invalid={!!errors.name}>
                    <Input
                      {...register("name")}
                      w="100%"
                      placeholder="Name*"
                      backdropFilter="contrast(70%)"
                      color="#fff"
                      _placeholder={{ color: "#fff" }}
                    />
                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                  </Field.Root>
                  <Field.Root invalid={!!errors.email}>
                    <Input
                      {...register("email")}
                      w="100%"
                      placeholder="Email*"
                      backdropFilter="contrast(70%)"
                      color="#fff"
                      _placeholder={{ color: "#fff" }}
                    />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                  </Field.Root>
                  <Field.Root invalid={!!errors.subject}>
                    <Input
                      {...register("subject")}
                      w="100%"
                      placeholder="Subject*"
                      backdropFilter="contrast(70%)"
                      autoComplete="off"
                      color="#fff"
                      _placeholder={{ color: "#fff" }}
                    />
                    <Field.ErrorText>{errors.subject?.message}</Field.ErrorText>
                  </Field.Root>
                  <Field.Root invalid={!!errors.body}>
                    <Textarea
                      {...register("body")}
                      w="100%"
                      placeholder="Body*"
                      resize="none"
                      backdropFilter="contrast(70%)"
                      color="#fff"
                      _placeholder={{ color: "#fff" }}
                    />
                    <Field.ErrorText>{errors.body?.message}</Field.ErrorText>
                  </Field.Root>
                  <Text fontSize="12px">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <Link
                      href="https://policies.google.com/privacy"
                      textDecoration="underline"
                      color="inherit"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://policies.google.com/terms"
                      textDecoration="underline"
                      color="inherit"
                      target="_blank"
                    >
                      Terms of Service
                    </Link>{" "}
                    apply.
                  </Text>
                  <PlainButton
                    type="submit"
                    disabled={isSubmitting}
                    w="100%"
                    bg="gray.100"
                    color="gray.800"
                    fontFamily="inherit"
                    fontWeight="semibold"
                    fontSize="md"
                    lineHeight={1.33}
                    h="10"
                    px={4}
                    borderRadius="md"
                    boxShadow="0 0 3px 0 #000"
                    cursor="pointer"
                    _hover={{ bg: "#ccc" }}
                    _disabled={{ opacity: 0.6, cursor: "not-allowed" }}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </PlainButton>
                </Flex>
                <Toaster toaster={toaster} />
              </form>
            </FormProvider>
          </AnimatedContent>
        </Flex>
      </PageSection>
    </PageContainer>
  );
};
