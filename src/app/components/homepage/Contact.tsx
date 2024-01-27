import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";

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
  const { executeRecaptcha } = useReCaptcha();

  const onSubmit: SubmitHandler<ContactFormSchemaProps> = async (data) => {
    const token = await executeRecaptcha("form_submit");
    return axios.post("/api/contact", { ...data, token });
  };

  return (
    <PageContainer id="contact">
      <Flex flexDir="column" alignItems="center" alignSelf="center">
        <Heading as="h2" mb={4} color="#333">
          Contact
        </Heading>
        <FormProvider {...formSettings}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDir="column" width="50vw" gap={4}>
              <FormControl isInvalid={!!errors.name}>
                <Input {...register("name")} w="100%" placeholder="Name*" />
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input {...register("email")} w="100%" placeholder="Email*" />
              </FormControl>
              <FormControl isInvalid={!!errors.subject}>
                <Input
                  {...register("subject")}
                  w="100%"
                  placeholder="Subject*"
                />
              </FormControl>
              <FormControl isInvalid={!!errors.body}>
                <Textarea {...register("body")} w="100%" placeholder="Body*" />
              </FormControl>
              <Button type="submit">Send</Button>
            </Flex>
          </form>
        </FormProvider>
      </Flex>
    </PageContainer>
  );
};
