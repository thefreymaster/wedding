import React from 'react';
import { Box, Divider, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { PrimaryButton } from '../../common/Buttons';
import { isMobile } from 'react-device-detect';
import { getInvite } from '../../api/index';
import { LogoLottie } from '../../common/Logo';
import SUCCESS from '../../lottie/success.json';
import { SECONDARY_COLOR } from '../../constants';
import { Wrapper } from '../../common/Wrapper';
import { pretty } from '../../data/attendees';
import { debounce } from 'lodash.debounce';

export const RSVP = (props: {
    page: number
}) => {
    React.useLayoutEffect(() => {
        getInvite();
    }, [])
    const size = 'md';

    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [newResults, setNewResults] = React.useState([]);

    const handleSearch = async (event: any) => {
        // console.log(event.target.value);
        // console.log(attendees);
        // eslint-disable-next-line array-callback-return
        const results: any = await Object.entries(pretty).filter(([key, value]) => {
            if (key.toLowerCase().includes(event.target.value.toLowerCase())) {
                return {
                    [key]: value
                }
            }
        })
        if (results.length !== Object.entries(pretty).length) {
            setNewResults(results);
        }
        else {
            setNewResults([]);
        }
        console.log(results);
    }

    return (
        <Wrapper in>
            <Box maxW={isMobile ? "90%" : "50%"} minW={isMobile ? "90%" : "50%"} padding="8">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">RSVP</Text>
                {/* <Text color={PRIMARY_COLOR} fontSize="md" fontWeight="300" >Please add each member of your par</Text> */}
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
                                    <Form>
                                        <Field name="name">
                                            {({ field, form }: { field: any, form: any }) => (
                                                <FormControl onChange={handleSearch} colorScheme="red" isRequired isInvalid={form.errors.name && form.touched.name}>
                                                    <FormLabel htmlFor="name">Your Name</FormLabel>
                                                    <Input {...field} size={size} variant="filled" id="name" placeholder="First Name Last Name" autoComplete={false} autoCorrect={false} _autofill={false} />
                                                    <FormHelperText>Please search your name here</FormHelperText>
                                                </FormControl>
                                            )}
                                        </Field>
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
                                {newResults?.map(([key, value]: [key: any, value: any]) => {
                                    return (
                                        <Box _hover={{ cursor: 'pointer', boxShadow: 'lg' }} transition="box-shadow 200ms ease-in-out" padding="10px 20px" marginTop="10px" borderRadius="md" border="2px solid #cccccc">
                                            {value?.prettyName}
                                        </Box>
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