import { Box, Button, ButtonGroup, Divider, Fade, FormControl, FormHelperText, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useHistory, useLocation } from 'react-router-dom';
import { PrimaryButton } from '../../common/Buttons';
import { Wrapper } from '../../common/Wrapper';
import { DARK_PRIMARY, SECONDARY_COLOR } from '../../constants';
import { validate } from '../../validation';

export const Found = () => {
    const location = useLocation();
    const history = useHistory();
    const { state }: any = location;
    const { attendee } = state;
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const toast = useToast();

    if (!attendee) {
        history.push('/rsvp');
    }
    console.log(attendee);
    return (
        <Wrapper in justifyContent='flex-start'>
            <Box maxW={isMobile ? "90%" : "50%"} minW={isMobile ? "90%" : "50%"} padding="8">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">RSVP</Text>
                <Box p="2" />
                <Divider />
                <Box p="2" />
                <Box p="1">
                    <Text color={DARK_PRIMARY} fontSize="2xl" fontWeight="700" letterSpacing="2px">{attendee.prettyName}</Text>
                </Box>
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
                                <Form>
                                    <Field name="isAttending">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl isRequired id="isAttending">
                                                <FormLabel>Will you be attending?</FormLabel>
                                                <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                                                    <Button colorScheme={field.value === false ? "yellow" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("isAttending", false)}>No</Button>
                                                    <Button colorScheme={field.value ? "green" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("isAttending", true)}>Yes</Button>
                                                </ButtonGroup>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box p="2" />
                                    {attendee?.hasPlusOne && <Field name="hasPlusOneAttending">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl isRequired id="hasPlusOneAttending">
                                                <FormLabel>Will your plus one be attending?</FormLabel>
                                                <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                                                    <Button colorScheme={field.value === false ? "yellow" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOneAttending", false)}>No</Button>
                                                    <Button colorScheme={field.value ? "green" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOneAttending", true)}>Yes</Button>
                                                </ButtonGroup>
                                            </FormControl>
                                        )}
                                    </Field>}
                                    <Divider />
                                    <Box p="2" />
                                    <Field name="foodAlergies">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl id="foodAlergies">
                                                <FormLabel>Please provide any food alergies</FormLabel>
                                                <Textarea
                                                    placeholder=''
                                                    size='sm'
                                                    colorScheme="green"
                                                />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box p="2" />
                                    <Field name="comments">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl id="comments">
                                                <FormLabel>Please provide any additional comments</FormLabel>
                                                <Textarea
                                                    placeholder=''
                                                    size='sm'
                                                    colorScheme="green"
                                                />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box p="2" />
                                    <PrimaryButton isLoading={isLoading} style={{ minWidth: "100%" }} variant="solid" disabled={validate({ values: formProps.values })} onClick={async () => {
                                        addAttendee({ postData: formProps.values, setIsLoading, setIsSuccess, toast })
                                    }}>
                                        SUBMIT
                                    </PrimaryButton>
                                </Form>
                                {/* {isSuccess && (
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <LogoLottie json={SUCCESS} play height={200} width={200} />
                                    </Box>
                                )}
                                {isSuccess && <PrimaryButton isLoading={isLoading} style={{ minWidth: "100%" }} variant="solid" onClick={() => {
                                    setIsSuccess(false);
                                    formProps.resetForm();
                                }}>
                                    Add Another Attendee
                                </PrimaryButton>} */}
                            </>
                        )
                    }}
                </Formik>
            </Box>
        </Wrapper>
    )
}

function addAttendee(arg0: { postData: { name: string; hasPlusOne: null; plusOneName: string; }; setIsLoading: any; setIsSuccess: any; toast: any; }) {
    throw new Error('Function not implemented.');
}
