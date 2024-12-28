import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';

const ConfirmedBooking = () => {
    return (
      <VStack gap={4}>
        <Heading as="h1" fontWeight={800}>Booking Confirmed</Heading>
        <p>Your booking has been successfully confirmed. Thank you!</p>
      </VStack>
    );
};

export default ConfirmedBooking;