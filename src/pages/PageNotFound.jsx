import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, Text } from "@chakra-ui/react";

export const PageNotFound = () => {
return (
    <div>
        <VStack gap={4}>
            <Heading as={"h1"} fontWeight="bolder" fontSize="2xl">
                404 Page Not Found
            </Heading>
            <Text>
                Go back to {" "} 
                <Link variant="underline" href="/" colorPalette="blue">
                    <b>Home Page</b>
                </Link>{" "}
            </Text>
        </VStack>
    </div>
);
};
