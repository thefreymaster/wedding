import React from 'react';
import { Box, Button, ButtonGroup, Divider, Fade, FormControl, FormHelperText, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { Skyline } from '../../common/SVG';
import { Field, Form, Formik } from 'formik';
import { PrimaryButton } from '../../common/Buttons';
import { isMobile } from 'react-device-detect';
import { validate } from '../../validation/index';
import { addAttendee } from '../../api/index';
import { LogoLottie } from '../../common/Logo';
import SUCCESS from '../../lottie/success.json';

export const RSVP = (props: {
    page: number
}) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const toast = useToast();

    return (
        <Box style={{
            width: 'calc(100vw)',
            height: '100vh',
        }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
        >
            <Box minW={isMobile ? "90%" : "40%"}>
                <Text fontSize="4xl">RSVP</Text>
                <Text fontSize="md">Please add each attendee individually.  If the attendee is bringing a plus one, please add them individually.</Text>
                <Box p="2" />
                <Divider />
                <Box p="2" />
                <Formik initialValues={{
                    name: '',
                    hasPlusOne: null,
                    plusOneName: ''
                }}
                    onSubmit={(values) => { console.log(values) }}
                >
                    {(formProps) => {
                        return (
                            <>
                                {!isSuccess && <Form>
                                    <Field name="name">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl colorScheme="red" isRequired isInvalid={form.errors.name && form.touched.name}>
                                                <FormLabel htmlFor="name">Attendee Name</FormLabel>
                                                <Input {...field} variant="filled" id="name" placeholder="John Hammond" autoCorrect={false} _autofill={false} />
                                                <FormHelperText>Not Hammond family, not John Hammond + 1</FormHelperText>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box p="2" />
                                    <Field name="hasPlusOne">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl isRequired id="traffic">
                                                <FormLabel>Is this person a plus one?</FormLabel>
                                                <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                                                    <Button colorScheme={field.value === false ? "yellow" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOne", false)}>No</Button>
                                                    <Button colorScheme={field.value ? "green" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOne", true)}>Yes</Button>
                                                </ButtonGroup>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box p="2" />
                                    {formProps.values["hasPlusOne"] === true && (
                                        <Fade in>
                                            <Field name="plusOneName">
                                                {({ field, form }: { field: any, form: any }) => (
                                                    <FormControl colorScheme="red" isRequired isInvalid={form.errors.name && form.touched.name}>
                                                        <FormLabel htmlFor="name">Who are they a plus one to?</FormLabel>
                                                        <Input {...field} variant="filled" id="name" placeholder="John Hammond" autoCorrect={false} _autofill={false} />
                                                        <FormHelperText>We use this information to sit this person near you, please still add them individually.</FormHelperText>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </Fade>
                                    )}
                                    <Box p="2" />
                                    <Divider />
                                    <Box p="2" />
                                    <PrimaryButton isLoading={isLoading} style={{ minWidth: "100%" }} variant="solid" disabled={validate({ values: formProps.values })} onClick={async () => {
                                        addAttendee({ postData: formProps.values, setIsLoading, setIsSuccess, toast })
                                    }}>
                                        SUBMIT
                                    </PrimaryButton>
                                </Form>}
                                {isSuccess && (
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <LogoLottie json={SUCCESS} play height={200} width={200} />
                                    </Box>
                                )}
                                {isSuccess && <PrimaryButton isLoading={isLoading} style={{ minWidth: "100%" }} variant="solid" onClick={() => {
                                    setIsSuccess(false);
                                    formProps.resetForm();
                                }}>
                                    Add Another Attendee
                                </PrimaryButton>}
                            </>
                        )
                    }}
                </Formik>
            </Box>

            <Skyline timing={200} />
        </Box>
    )
}