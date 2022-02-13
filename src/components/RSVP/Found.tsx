import {
  Box,
  Button,
  ButtonGroup,
  Fade,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { isMobile } from "react-device-detect";
import { useHistory, useLocation } from "react-router-dom";
import { PrimaryButton } from "../../common/Buttons";
import { Wrapper } from "../../common/Wrapper";
import { DARK_PRIMARY } from "../../constants";
import { validate } from "../../validation";
import { setAttendee } from "../../api";
import { LogoLottie } from "../../common/Logo";
import CELEBRATE from "../../lottie/celebrate.json";
import "./found.css";

const CONFIRMED = "You're Confirmed";
const NOW = "Now ";
const LETS = " Let's ";
const PARTY = " Party!";
const NOW_LETS_PARTY = "Now Let's Party!";

const Character = (props: {
  index: number;
  character: string;
  timing: number;
  setTiming(number: number): void;
}) => {
  const style = {
    "animation-delay": 0.5 + props.index / 10 + "s",
    fontFamily: "FakeSerif",
  };
  if(props.character === " "){
    return <>&nbsp;</>
  }

  return (
    <Fade in>
      <Text
        style={style}
        className="text"
        animation="animation: move-text 0.75s forwards;"
        display="flex"
        flexDir="row"
        color={DARK_PRIMARY}
        fontSize={isMobile ? "64px" : "120px"}
        fontWeight="700"
        letterSpacing="2px"
      >
        {props.character}
      </Text>
    </Fade>
  );
};

export const Found = () => {
  const location = useLocation();
  const history = useHistory();
  const { state }: any = location;
  const { attendee } = state;
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [timing, setTiming] = React.useState(0);

  if (!attendee) {
    history.push("/rsvp");
  }
  return (
    <Wrapper in justifyContent={isSuccess ? "center" : "flex-start"}>
      <Box
        maxW={isMobile ? "90%" : "40%"}
        minW={isMobile ? "90%" : "40%"}
        padding="8"
      >
        {!isSuccess && (
          <>
            {/* <Text
              color={SECONDARY_COLOR}
              fontSize="1xl"
              fontWeight="500"
              letterSpacing="10px"
            >
              RSVP
            </Text> */}
            {/* <Box p="2" />
            <Divider />
            <Box p="2" /> */}
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
          </>
        )}
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
              <>
                {!isSuccess && (
                  <Form>
                    <Field name="isAttending">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl isRequired id="isAttending">
                          <FormLabel>
                            Will {attendee.attendee1} be attending the reception on July 3rd 2022?
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
                    <Box p="2" />
                    {attendee?.hasPlusOne && (
                      <Field name="hasPlusOneAttending">
                        {({ field, form }: { field: any; form: any }) => (
                          <FormControl isRequired id="hasPlusOneAttending">
                            <FormLabel>
                              Will {attendee.attendee2} be attending the reception on July 3rd 2022?
                            </FormLabel>
                            <ButtonGroup
                              isAttached
                              style={{ minWidth: "100%" }}
                            >
                              <Button
                                colorScheme={
                                  field.value === false ? "yellow" : "gray"
                                }
                                isFullWidth
                                borderBottomLeftRadius="100px"
                                mr="-px"
                                onClick={(e) =>
                                  form.setFieldValue(
                                    "hasPlusOneAttending",
                                    false
                                  )
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
                                  form.setFieldValue(
                                    "hasPlusOneAttending",
                                    true
                                  )
                                }
                              >
                                Accept
                              </Button>
                            </ButtonGroup>
                          </FormControl>
                        )}
                      </Field>
                    )}
                    <Box p="2" />

                    <Field name="isAttendingWelcome">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl isRequired id="isAttendingWelcome">
                          <FormLabel>
                            Will your party be attending the welcome reception on July 2rd 2022?
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
                            before our wedding for a welcome reception on
                            Saturday July 2nd from 5-7PM at Russell House
                            Tavern. Please let us know if you are attending so
                            that we can plan accordingly!
                          </FormHelperText>
                        </FormControl>
                      )}
                    </Field>
                    <Box p="2" />
                    <FormControl>
                      <FormHelperText>
                        We will require all guests attending our wedding be
                        fully vaccinated against COVID-19. We must prioritize
                        the health and safety of our friends and family at this
                        time. Thank you for understanding and respecting our
                        wishes.
                      </FormHelperText>
                    </FormControl>
                    <Box p="2" />
                    <Field name="foodAlergies">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl id="foodAlergies">
                          <FormLabel>
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
                          <FormLabel>
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
                    <Box p="2" />
                    <PrimaryButton
                      isLoading={isLoading}
                      style={{ minWidth: "100%" }}
                      variant="solid"
                      disabled={
                        validate({ values: formProps.values }) || isLoading
                      }
                      onClick={async () => {
                        await setAttendee({
                          data: formProps?.values,
                          attendeeId: formProps?.values?.id,
                          setIsLoading,
                          setIsSuccess,
                        });
                        formProps.resetForm();
                      }}
                    >
                      SUBMIT
                    </PrimaryButton>
                  </Form>
                )}
                {isSuccess &&
                  (isMobile ? (
                    <Box
                      display="flex"
                      flexDir={isMobile ? "column" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <LogoLottie
                          loop={10000}
                          json={CELEBRATE}
                          play
                          height={200}
                          width={200}
                        />
                      </Box>
                      <Box display="flex" flexDir="column" minW="50vw">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Fade in={isSuccess}>
                            <Text
                              style={{ fontFamily: "FakeSerif" }}
                              color={DARK_PRIMARY}
                              fontSize="1xl"
                              fontWeight="700"
                              letterSpacing="2px"
                            >
                              {CONFIRMED}
                            </Text>
                          </Fade>
                        </Box>
                        <Box
                          display="flex"
                          flexDir={isMobile ? "column" : "row"}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Box display="flex" flexDir="row" marginRight="20px">
                            {NOW.split("").map((c, i) => (
                              <Character
                                index={i}
                                character={c}
                                timing={timing}
                                setTiming={setTiming}
                              />
                            ))}
                          </Box>
                          <Box display="flex" flexDir="row" paddingRight="2">
                            {LETS.split("").map((c, i) => (
                              <Character
                                index={i}
                                character={c}
                                timing={timing}
                                setTiming={setTiming}
                              />
                            ))}
                          </Box>
                          <Box display="flex" flexDir="row">
                            {PARTY.split("").map((c, i) => (
                              <Character
                                index={i}
                                character={c}
                                timing={timing}
                                setTiming={setTiming}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <LogoLottie
                          loop={10000}
                          json={CELEBRATE}
                          play
                          height={200}
                          width={200}
                        />
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      display="flex"
                      flexDir={isMobile ? "column" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <LogoLottie
                          loop={10000}
                          json={CELEBRATE}
                          play
                          height={200}
                          width={200}
                        />
                      </Box>
                      <Box display="flex" flexDir="column" minW="50vw">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Fade in={isSuccess}>
                            <Text
                              style={{ fontFamily: "FakeSerif" }}
                              color={DARK_PRIMARY}
                              fontSize="1xl"
                              fontWeight="700"
                              letterSpacing="2px"
                            >
                              {CONFIRMED}
                            </Text>
                          </Fade>
                        </Box>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {NOW_LETS_PARTY.split("").map((c, i) => (
                            <Character
                              index={i}
                              character={c}
                              timing={timing}
                              setTiming={setTiming}
                            />
                          ))}
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <LogoLottie
                          loop={10000}
                          json={CELEBRATE}
                          play
                          height={200}
                          width={200}
                        />
                      </Box>
                    </Box>
                  ))}
              </>
            );
          }}
        </Formik>
      </Box>
    </Wrapper>
  );
};
