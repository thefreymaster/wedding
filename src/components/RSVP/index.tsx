import React from 'react';
import { Box, Button, ButtonGroup, Divider, Fade, FormControl, FormHelperText, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { PrimaryButton } from '../../common/Buttons';
import { isMobile } from 'react-device-detect';
import { validate } from '../../validation/index';
import { addAttendee } from '../../api/index';
import { LogoLottie } from '../../common/Logo';
import SUCCESS from '../../lottie/success.json';
import { SECONDARY_COLOR } from '../../constants';
import { Wrapper } from '../../common/Wrapper';

export const RSVP = (props: {
    page: number
}) => {
    const size = 'md';
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const toast = useToast();

    return (
        <Wrapper in>
            <Box maxW={isMobile ? "90%" : "50%"} padding="8">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">RSVP</Text>
                {/* <Text color={PRIMARY_COLOR} fontSize="md" fontWeight="300" >Please add each member of your par</Text> */}
                <Box p="2" />
                <Divider />
                <Box p="2" />
                <Formik initialValues={{
                    attending: null,
                    name: '',
                    hasPlusOne: null,
                    plusOneName: ''
                }}
                    onSubmit={(values) => { console.log(values) }}
                >
                    {(formProps) => {
                        return (
                            <>
                                {!isSuccess &&
                                    <Form>
                                        <Field name="attending">
                                            {({ field, form }: { field: any, form: any }) => (
                                                <FormControl isRequired id="traffic" maxWidth="xs">
                                                    <FormLabel>Will you be attending the wedding reception July 3rd 2022?</FormLabel>
                                                    <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                                                        <Button size={size} colorScheme={field.value === false ? "blue" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("attending", false)}>No</Button>
                                                        <Button size={size} colorScheme={field.value ? "green" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("attending", true)}>Yes</Button>
                                                    </ButtonGroup>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Box p="2" />
                                        <Field name="name">
                                            {({ field, form }: { field: any, form: any }) => (
                                                <FormControl colorScheme="red" isRequired isInvalid={form.errors.name && form.touched.name}>
                                                    <FormLabel htmlFor="name">Your Name</FormLabel>
                                                    <Input {...field} size={size} variant="filled" id="name" placeholder="John Hammond" autoCorrect={false} _autofill={false} />
                                                    <FormHelperText>Please add your name here and your invited guest's name below. Due to limited capacity, we ask that you do not bring your kiddos.</FormHelperText>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Box p="2" />
                                        <Field name="hasPlusOne">
                                            {({ field, form }: { field: any, form: any }) => (
                                                <FormControl isRequired id="traffic" maxWidth="xs">
                                                    <FormLabel>Are you bringing a plus one?</FormLabel>
                                                    <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                                                        <Button size={size} colorScheme={field.value === false ? "blue" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOne", false)}>No</Button>
                                                        <Button size={size} colorScheme={field.value ? "green" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOne", true)}>Yes</Button>
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
                                                            <FormLabel htmlFor="name">Your Plus One's Name</FormLabel>
                                                            <Input {...field} size={size} variant="filled" id="name" placeholder="John Hammond" autoCorrect={false} _autofill={false} />
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
                                    Add Another Invitee
                                </PrimaryButton>}
                            </>
                        )
                    }}
                </Formik>
            </Box>
        </Wrapper>
    )
}