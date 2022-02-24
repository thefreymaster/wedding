import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useHistory, useLocation } from "react-router-dom";
import { PrimaryButton } from "../../common/Buttons";
import { Wrapper } from "../../common/Wrapper";
import { DARK_PRIMARY } from "../../constants";
import { validate } from "../../validation";
import { setAttendee } from "../../api";
import "./found.css";

const Found = () => {
  const location = useLocation();
  const history = useHistory();
  const toast = useToast();

  const { state }: any = location;
  const { attendee } = state;
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const getWidth = () => {
    if (isMobile) {
      return "98%";
    }
    if (isTablet) {
      return "60%";
    }
    return "40%";
  };

  if (!state?.attendee) {
    history.push("/rsvp");
  }
  return (
    <Wrapper in justifyContent={isSuccess ? "center" : "flex-start"}>
      <Box maxW={getWidth()} minW={getWidth()} padding={isMobile ? "4" : "8"}>
        <Box p="1">
          <Text
            color={DARK_PRIMARY}
            fontSize="xl"
            fontWeight="700"
            letterSpacing="2px"
          >
            {attendee.prettyName}
          </Text>
        </Box>
        <Formik
          initialValues={{
            foodAlergies: "",
            comments: "",
            ...attendee,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formProps) => {
            return (
              <Form>
                <Field name="isAttending">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isRequired id="isAttending">
                      <FormLabel fontSize="sm">
                        Will {attendee.attendee1} be attending the reception on
                        July 3rd 2022?
                      </FormLabel>
                      <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                        <Button
                          colorScheme={
                            field.value === false ? "yellow" : "gray"
                          }
                          isFullWidth
                          borderBottomLeftRadius="100px"
                          mr="-px"
                          onClick={(e) =>
                            form.setFieldValue("isAttending", false)
                          }
                        >
                          Decline
                        </Button>
                        <Button
                          colorScheme={field.value ? "green" : "gray"}
                          isFullWidth
                          mr="-px"
                          borderTopRightRadius="100px"
                          onClick={(e) =>
                            form.setFieldValue("isAttending", true)
                          }
                        >
                          Accept
                        </Button>
                      </ButtonGroup>
                    </FormControl>
                  )}
                </Field>

                {attendee?.hasPlusOne && (
                  <>
                    <Box
                      mt="2"
                      pt="2"
                      borderTop="2px dotted"
                      borderTopColor="gray.200"
                    />

                    <Field name="hasPlusOneAttending">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl isRequired id="hasPlusOneAttending">
                          <FormLabel fontSize="sm">
                            Will {attendee.attendee2} be attending the reception
                            on July 3rd 2022?
                          </FormLabel>
                          <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                            <Button
                              colorScheme={
                                field.value === false ? "yellow" : "gray"
                              }
                              isFullWidth
                              borderBottomLeftRadius="100px"
                              mr="-px"
                              onClick={(e) =>
                                form.setFieldValue("hasPlusOneAttending", false)
                              }
                            >
                              Decline
                            </Button>
                            <Button
                              colorScheme={field.value ? "green" : "gray"}
                              isFullWidth
                              borderTopRightRadius="100px"
                              mr="-px"
                              onClick={(e) =>
                                form.setFieldValue("hasPlusOneAttending", true)
                              }
                            >
                              Accept
                            </Button>
                          </ButtonGroup>
                        </FormControl>
                      )}
                    </Field>
                  </>
                )}
                <Box
                  mt="2"
                  pt="2"
                  borderTop="2px dotted"
                  borderTopColor="gray.200"
                />

                <Field name="isAttendingWelcome">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isRequired id="isAttendingWelcome">
                      <FormLabel fontSize="sm">
                        Will your party be attending the welcome reception on
                        July 2rd 2022?
                      </FormLabel>
                      <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                        <Button
                          colorScheme={
                            field.value === false ? "yellow" : "gray"
                          }
                          isFullWidth
                          borderBottomLeftRadius="100px"
                          mr="-px"
                          onClick={(e) =>
                            form.setFieldValue("isAttendingWelcome", false)
                          }
                        >
                          Decline
                        </Button>
                        <Button
                          colorScheme={field.value ? "green" : "gray"}
                          isFullWidth
                          mr="-px"
                          borderTopRightRadius="100px"
                          onClick={(e) =>
                            form.setFieldValue("isAttendingWelcome", true)
                          }
                        >
                          Accept
                        </Button>
                      </ButtonGroup>
                      <FormHelperText>
                        All of our guests are invited to join us the evening
                        before our wedding for a welcome reception on Saturday
                        July 2nd from 5-7PM at Russell House Tavern. Please let
                        us know if you are attending so that we can plan
                        accordingly!
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Box
                  mt="2"
                  pt="2"
                  borderTop="2px dotted"
                  borderTopColor="gray.200"
                />
                <Field name="foodAlergies">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl id="foodAlergies">
                      <FormLabel fontSize="sm">
                        Please provide any food allergies
                      </FormLabel>
                      <Textarea
                        resize="vertical"
                        {...field}
                        placeholder=""
                        size="sm"
                        colorScheme="green"
                        backgroundColor="white"
                      />
                    </FormControl>
                  )}
                </Field>
                <Box p="2" />
                <Field name="comments">
                  {({ field }: { field: any }) => (
                    <FormControl id="comments">
                      <FormLabel fontSize="sm">
                        Please provide any additional comments
                      </FormLabel>
                      <Textarea
                        resize="vertical"
                        {...field}
                        placeholder=""
                        size="sm"
                        colorScheme="green"
                        backgroundColor="white"
                      />
                    </FormControl>
                  )}
                </Field>
                <FormControl>
                  <FormHelperText
                    padding="10px"
                    border="2px dotted"
                    borderColor="gray.200"
                    backgroundColor="white"
                    borderRadius="8px"
                    boxShadow="sm"
                  >
                    We will require all guests attending our wedding be fully
                    vaccinated against COVID-19. We must prioritize the health
                    and safety of our friends and family at this time. Thank you
                    for understanding and respecting our wishes.
                  </FormHelperText>
                </FormControl>
                <Box
                  mt="2"
                  pt="2"
                  borderTop="2px dotted"
                  borderTopColor="gray.200"
                />
                <PrimaryButton
                  isLoading={isLoading}
                  style={{
                    minWidth: "100%",
                    borderTopRightRadius: "100px",
                    borderBottomLeftRadius: "100px",
                  }}
                  variant="solid"
                  disabled={validate({ values: formProps.values }) || isLoading}
                  onClick={async () => {
                    try {
                      await setAttendee({
                        data: formProps?.values,
                        attendeeId: formProps?.values?.id,
                        setIsLoading,
                        setIsSuccess,
                      });
                      await formProps.resetForm();
                      history.push("/rsvp/success", { success: true });
                    } catch (error) {
                      toast({
                        title: "Error!",
                        description:
                          "Sorry we couldn't save your RSVP, please try again later.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                      });
                    }
                  }}
                >
                  SUBMIT
                </PrimaryButton>
                <Box mt="1" pt="2" />
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Wrapper>
  );
};

export default Found;
