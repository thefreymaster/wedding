import React from 'react';
import { Box, Divider, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { PrimaryButton } from '../../common/Buttons';
import { isMobile } from 'react-device-detect';
import { getAttendees, getInvite } from '../../api/index';
import { LogoLottie } from '../../common/Logo';
import SUCCESS from '../../lottie/success.json';
import { SECONDARY_COLOR } from '../../constants';
import { Wrapper } from '../../common/Wrapper';
import { useHistory } from 'react-router-dom';

const Result = (props: {
    prettyName: string;
    attendee: any;
    onClick: any;
}) => {
    return (
        <Box onClick={() => props.onClick(props.attendee)} _hover={{ cursor: 'pointer', boxShadow: 'lg' }} backgroundColor="white" transition="box-shadow 200ms ease-in-out" padding="10px 20px" marginTop="10px" borderRadius="md" border="2px solid #cccccc">
            {props.prettyName}
        </Box>
    )
}

export const RSVP = (props: {
    page: number
}) => {
    React.useLayoutEffect(() => {
        getInvite();
    }, [])
    const size = 'md';
    const history = useHistory();

    const [animate, setAnimate] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [newResults, setNewResults] = React.useState([]);
    const [attendees, setAttendees] = React.useState({});

    React.useLayoutEffect(() => {
        console.log(attendees)
        getAttendees(setAttendees);
    }, [])

    const handleSearch = async (event: any) => {
        const results: any = await Object.entries(attendees).filter(([key, value]) => {
            if (key.toLowerCase().includes(event.target.value.toLowerCase())) {
                return {
                    [key]: value
                }
            }
        })
        if (results.length !== Object.entries(attendees).length) {
            setNewResults(results);
        }
        else {
            setNewResults([]);
        }
        console.log(results);
    }

    const handleFadeOut = (attendee: any) => {
        setAnimate(false)
        setTimeout(() => {
            history.push('/rsvp/found', { attendee })
        }, 200);
    }


    if (!attendees) {
        return null;
    }

    return (
        <Wrapper in={animate} justifyContent="flex-start">
            <Box maxW={isMobile ? "90%" : "40%"} minW={isMobile ? "90%" : "40%"} padding="8">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">RSVP</Text>
                <Box p="2" />
                <Divider />
                <Box p="2" />
                <Formik initialValues={{
                    search: '',
                }}
                    onSubmit={(values) => { console.log(values) }}
                >
                    {(formProps) => {
                        return (
                            <>
                                {!isSuccess &&
                                    <Form autoComplete="off">
                                        <Field name="name" autoComplete="off">
                                            {({ field, form }: { field: any, form: any }) => (
                                                <FormControl autoComplete="off" onChange={handleSearch} colorScheme="red" isRequired isInvalid={form.errors.name && form.touched.name}>
                                                    <FormLabel htmlFor="name">Find your RSVP</FormLabel>
                                                    <Input {...field} size={size} variant="filled" id="name" placeholder="First Name Last Name" autoComplete={false} autoCorrect={false} _autofill={false} />
                                                    <FormHelperText>Please search your name here to find your RSVP</FormHelperText>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Form>}
                                {isSuccess && (
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <LogoLottie json={SUCCESS} play height={200} width={200} />
                                    </Box>
                                )}
                                {isSuccess && (
                                    <PrimaryButton isLoading={isLoading} style={{ minWidth: "100%" }} variant="solid" onClick={() => {
                                        setIsSuccess(false);
                                        formProps.resetForm();
                                    }}>
                                        Add Another Invitee
                                    </PrimaryButton>
                                )}
                                {newResults?.map(([key, value]: [key: any, value: any]) => {
                                    return (
                                        <Result onClick={handleFadeOut} prettyName={value?.prettyName} attendee={value} />
                                    )
                                })}
                            </>
                        )
                    }}
                </Formik>
            </Box>
        </Wrapper>
    )
}