import {Box, Heading, Text} from "@chakra-ui/react";
import React from "react";

const Facts = () => {
    const fact = factList[Math.floor(Math.random() * factList.length)];

    return (
        <Box my={12} border="1px solid" borderColor="gray.300" p={4} rounded="md">
            <Heading size="sm">Whale fact!</Heading>
            <Text>{fact}</Text>
        </Box>
    )

}
export default Facts

const factList = [
    "Humpback whales don't eat for most of the year",
    "The blue whale is the largest animal that ever lived and can grow to 90 or more feet and weigh as much as 24 elephants! That’s more than 330,000 pounds (150,000 kg)",
    "All toothed whales have a 'melon' in their foreheads 🍉. The melon is a mass of adipose tissue found in the forehead of all toothed whales. It focuses and modulates the animal's vocalizations and acts as a sound lens.",
    "Scientists estimate bowhead whales (a baleen whale found in the Arctic) can live for more than 200 years",
    "Killer whales are actually dolphins 🐬",
    "In 2014, a Cuvier’s beaked whale made the deepest and longest dive ever recorded for a cetacean when it reached a depth of 1.9 miles (2,992 m) and stayed submerged for more than 2 hours",
    "The minke whale is the smallest baleen whale in North American waters",
    "Gray whales make one of the longest annual migrations of any mammal: they travel about 10,000 miles (16,000 km) round trip!",
    "Killer whales are highly social and often travel in groups that are matrifocal—a family unit focused or centered on the mother",
]