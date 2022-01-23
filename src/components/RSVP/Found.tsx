import { Box, Button, ButtonGroup, Divider, Fade, FormControl, FormLabel, Text, Textarea } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useHistory, useLocation } from 'react-router-dom';
import { PrimaryButton } from '../../common/Buttons';
import { Wrapper } from '../../common/Wrapper';
import { DARK_PRIMARY, SECONDARY_COLOR } from '../../constants';
import { validate } from '../../validation';
import { setAttendee } from '../../api';
import { LogoLottie } from '../../common/Logo';
import CELEBRATE from '../../lottie/celebrate.json';
import './found.css'

const CONFIRMED = "You're Confirmed";
const NOW = "Now ";
const LETS = "Let's "
const PARTY = "Party!";
console.log(PARTY.split(""));

const Character = (props: {
    index: number;
    character: string;
    timing: number;
    setTiming(number: number): void;
}) => {
    const style = { "animation-delay": (0.5 + props.index / 10) + "s", fontFamily: "FakeSerif" };

    return (
        <Fade in>
            <Text style={style} className="text" animation="animation: move-text 0.75s forwards;" display="flex" flexDir="row" color={DARK_PRIMARY} fontSize={isMobile ? "64px" : "120px"} fontWeight="700" letterSpacing="2px">
                {props.character}
            </Text>
        </Fade>
    );
}

export const Found = () => {
    const location = useLocation();
    const history = useHistory();
    const { state }: any = location;
    const { attendee } = state;
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [timing, setTiming] = React.useState(0);

    if (!attendee) {
        history.push('/rsvp');
    }
    return (
        <Wrapper in justifyContent='center'>
            <Box maxW={isMobile ? "90%" : "40%"} minW={isMobile ? "90%" : "40%"} padding="8">
                {!isSuccess && (
                    <>
                        <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">RSVP</Text>
                        <Box p="2" />
                        <Divider />
                        <Box p="2" />
                        <Box p="1">
                            <Text color={DARK_PRIMARY} fontSize="xl" fontWeight="700" letterSpacing="2px">{attendee.prettyName}</Text>
                        </Box>
                    </>
                )}
                <Formik initialValues={{
                    ...attendee,
                    foodAlergies: '',
                    comments: ''
                }}
                    onSubmit={(values) => { console.log(values) }}
                >
                    {(formProps) => {
                        return (
                            <>
                                {!isSuccess && <Form>
                                    <Field name="isAttending">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl isRequired id="isAttending">
                                                <FormLabel>Will {attendee.attendee1} be attending?</FormLabel>
                                                <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                                                    <Button colorScheme={field.value === false ? "yellow" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("isAttending", false)}>Decline</Button>
                                                    <Button colorScheme={field.value ? "green" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("isAttending", true)}>Accept</Button>
                                                </ButtonGroup>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box p="2" />
                                    {attendee?.hasPlusOne && <Field name="hasPlusOneAttending">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <FormControl isRequired id="hasPlusOneAttending">
                                                <FormLabel>Will {attendee.attendee2} be attending?</FormLabel>
                                                <ButtonGroup isAttached style={{ minWidth: "100%" }}>
                                                    <Button colorScheme={field.value === false ? "yellow" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOneAttending", false)}>Decline</Button>
                                                    <Button colorScheme={field.value ? "green" : "gray"} isFullWidth mr="-px" onClick={(e) => form.setFieldValue("hasPlusOneAttending", true)}>Accept</Button>
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
                                                    resize="vertical"
                                                    {...field}
                                                    placeholder=''
                                                    size='sm'
                                                    colorScheme="green"
                                                    backgroundColor="white"
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
                                                    resize="vertical"
                                                    {...field}
                                                    placeholder=''
                                                    size='sm'
                                                    colorScheme="green"
                                                    backgroundColor="white"
                                                />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box p="2" />
                                    <PrimaryButton isLoading={isLoading} style={{ minWidth: "100%" }} variant="solid" disabled={validate({ values: formProps.values }) || isLoading}
                                        onClick={async () => {
                                            await setAttendee({ data: formProps?.values, attendeeId: formProps?.values?.id, setIsLoading, setIsSuccess })
                                        }}>
                                        SUBMIT
                                    </PrimaryButton>
                                </Form>}
                                {isSuccess && (
                                    <Box display="flex" flexDir={isMobile ? "column" : "row"} alignItems="center" justifyContent="center">
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <LogoLottie loop={10000} json={CELEBRATE} play height={200} width={200} />
                                        </Box>
                                        <Box display="flex" flexDir="column" minW="50vw">
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <Fade in={isSuccess}>
                                                    <Text style={{ fontFamily: "FakeSerif" }} color={DARK_PRIMARY} fontSize="1xl" fontWeight="700" letterSpacing="2px">
                                                        {CONFIRMED}
                                                    </Text>
                                                </Fade>
                                            </Box>
                                            <Box display="flex" flexDir={isMobile ? "column" : "row"} alignItems="center" justifyContent="center">
                                                <Box display="flex" flexDir="row">{NOW.split("").map((c, i) => <Character index={i} character={c} timing={timing} setTiming={setTiming} />)}</Box>
                                                <Box display="flex" flexDir="row">{LETS.split("").map((c, i) => <Character index={i} character={c} timing={timing} setTiming={setTiming} />)}</Box>
                                                <Box display="flex" flexDir="row">{PARTY.split("").map((c, i) => <Character index={i} character={c} timing={timing} setTiming={setTiming} />)}</Box>
                                            </Box>
                                        </Box>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <LogoLottie loop={10000} json={CELEBRATE} play height={200} width={200} />
                                        </Box>
                                    </Box>
                                )}
                                {/* {isSuccess && <PrimaryButton isLoading={isLoading} style={{ minWidth: "100%" }} variant="solid" onClick={() => {
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
