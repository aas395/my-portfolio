import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
  Link,
} from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";
import { AnimatedHeading } from "../AnimatedHeading";
import { AnimatedContent } from "../AnimatedContent";

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
    formState: { errors },
  } = formSettings;
  const { executeRecaptcha, ...recaptchaProps } = useReCaptcha();

  const onSubmit: SubmitHandler<ContactFormSchemaProps> = async (data) => {
    const token = await executeRecaptcha("form_submit");
    return axios.post("/api/contact", { ...data, token });
  };

  return (
    <PageContainer id="contact">
      <Flex flexDir="column" alignItems="center" alignSelf="center" w="100%">
        <AnimatedHeading>Contact</AnimatedHeading>
        <AnimatedContent>
          <ReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          >
            <FormProvider {...formSettings}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <Flex flexDir="column" width="100%" gap={4}>
                  <FormControl isInvalid={!!errors.name}>
                    <Input {...register("name")} w="100%" placeholder="Name*" />
                  </FormControl>
                  <FormControl isInvalid={!!errors.email}>
                    <Input
                      {...register("email")}
                      w="100%"
                      placeholder="Email*"
                    />
                  </FormControl>
                  <FormControl isInvalid={!!errors.subject}>
                    <Input
                      {...register("subject")}
                      w="100%"
                      placeholder="Subject*"
                    />
                  </FormControl>
                  <FormControl isInvalid={!!errors.body}>
                    <Textarea
                      {...register("body")}
                      w="100%"
                      placeholder="Body*"
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
                  <Button type="submit">Send</Button>
                </Flex>
              </form>
            </FormProvider>
          </ReCaptchaProvider>
        </AnimatedContent>
      </Flex>
    </PageContainer>
  );
};
