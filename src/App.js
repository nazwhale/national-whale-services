import './App.css';
import React, {useState} from "react";
import {Image, Center, Container, Flex, Heading, HStack, useBoolean} from "@chakra-ui/react";
import News from "./News";
import Facts from "./Facts";


function App() {
    const [audio] = useState(new Audio("humpbackFeedingCall.mp3"))
    const [playing, setPlaying] = useBoolean(false)

    const onSpeakerClick = () => {
        if (playing) {
            setPlaying.toggle()
            audio.pause()
        } else {
            setPlaying.toggle()
            audio.currentTime = 10
            audio.play()
        }
    }

    return (
        <Container px={6} py={4} my={12} maxW="container.md">
            <Flex justify="space-between" align="center">
                <HStack align="center" spacing={6}>
                    <Image src='nws-logo.png' alt='whale' h={[65, 150]} p={2}/>
                    <Heading mt={4} size={["md", "xl"]}>National Whale Services</Heading>
                </HStack>
                <Image cursor="pointer" src={playing ? "speaker3.png" : "speaker.png"}
                       alt='whale' h={[42, 70]}
                       onClick={onSpeakerClick}/>
            </Flex>

            <Facts/>

            <News/>

            <Center mb={12}>
                <Image src='whaleterloo.png' alt='whale'/>
            </Center>

            <Heading as='i' size="lg" bgGradient='linear(to-l, #7928CA, #FF0080)'
                     bgClip='text' fontWeight='extrabold'>
                Spacewhale
            </Heading>
            <Image
                rounded="md"
                mb={12}
                src="https://www.sciencehistory.org/sites/default/files/styles/twitter_card/public/distillations_magazine/whaleinspace.jpg?itok=QlcFOC0T"
            />
        </Container>
    );
}

export default App;
