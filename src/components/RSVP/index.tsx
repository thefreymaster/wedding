import React from "react";
import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { isMobile, isTablet } from "react-device-detect";
import { getAttendees, signIn } from "../../api/index";
import { LogoLottie } from "../../common/Logo";
import SUCCESS from "../../lottie/success.json";
import { SECONDARY_COLOR } from "../../constants";
import { Wrapper } from "../../common/Wrapper";
import { useHistory } from "react-router-dom";

const Result = (props: { prettyName: string; attendee: any; onClick: any }) => {
  return (
    <Box
      key={props.attendee.id}
      onClick={() => props.onClick(props.attendee)}
      _hover={{ cursor: "pointer", boxShadow: "lg" }}
      _active={{ boxShadow: "inner", borderWidth: 0 }}
      boxShadow="md"
      backgroundColor="white"
      transition="box-shadow 200ms ease-in-out"
      padding="10px 20px"
      marginTop="10px"
      borderRadius="md"
      border="0.1px solid #cccccc"
    >
      {props.prettyName}
    </Box>
  );
};

const RSVP = (props: { page: number }) => {
  const size = "md";
  const history = useHistory();

  const [animate, setAnimate] = React.useState(true);
  const [isSuccess] = React.useState(false);
  const [newResults, setNewResults] = React.useState([]);
  const [attendees, setAttendees] = React.useState({});

  React.useLayoutEffect(() => {
    getAttendees(setAttendees);
  }, []);

  const handleSearch = async (event: any) => {
    const results: any = await Object.entries(attendees).filter(
      ([key, value]) => {
        if (
          key
            .toLowerCase()
            .includes(event.target.value.replace(" ", "").toLowerCase())
        ) {
          return {
            [key]: value,
          };
        }
      }
    );
    if (results.length !== Object.entries(attendees).length) {
      setNewResults(results);
    } else {
      setNewResults([]);
    }
  };

  const handleFadeOut = async (attendee: any) => {
    setAnimate(false);
    await signIn();
    setTimeout(() => {
      history.push("/rsvp/found", { attendee });
    }, 200);
  };

  if (!attendees) {
    return null;
  }

  const getWidth = () => {
    if (isMobile) {
      return "98%";
    }
    if (isTablet) {
      return "60%";
    }
    return "40%";
  };

  return (
    <Wrapper in={animate} justifyContent="flex-start">
      <Box maxW={getWidth()} minW={getWidth()} padding={isMobile ? "4" : "8"}>
        <Text
          color={SECONDARY_COLOR}
          fontSize="1xl"
          fontWeight="500"
          letterSpacing="10px"
        >
          RSVP
        </Text>
        <Box p="2" />
        <Divider />
        <Box p="2" />
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => {
            return (
              <>
                <Form autoComplete="off">
                  <Field name="name" autoComplete="off">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl
                        autoComplete="off"
                        onChange={handleSearch}
                        colorScheme="red"
                        isRequired
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">
                          Find your invitation
                        </FormLabel>
                        <Input
                          {...field}
                          size={size}
                          variant="filled"
                          id="name"
                          placeholder="First Name Last Name"
                          autoComplete={false}
                          autoCorrect={false}
                          _autofill={false}
                        />
                        <FormHelperText>
                          Please search your name here to find your invitation
                        </FormHelperText>
                      </FormControl>
                    )}
                  </Field>
                </Form>
                {newResults?.map(([key, value]: [key: any, value: any]) => {
                  return (
                    <Result
                      onClick={handleFadeOut}
                      prettyName={value?.prettyName}
                      attendee={value}
                    />
                  );
                })}
              </>
            );
          }}
        </Formik>
      </Box>
    </Wrapper>
  );
};

export default RSVP;
