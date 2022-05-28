import './App.css';
import {Box, Flex, Heading, HStack, useBoolean} from "@chakra-ui/react";
import News from "./News";
import {Image} from '@chakra-ui/react'


function App() {
    const [playing, setPlaying] = useBoolean(false)

    let audio = new Audio("humpbackFeedingCall.mp3")

    const onSpeakerClick = () => {
        if (playing) {
            console.log('pausing')
            audio.pause()
        } else {
            console.log('playing')
            audio.play()
        }

        setPlaying.toggle()
    }

    return (
        <Box px={6} py={4}>

            <Flex justify="space-between" align="center">
                <HStack align="center" spacing={6}>
                    <Image src='nws-logo.png' alt='whale' h={150} bg={"blue.200"} p={2} rounded="100%"/>
                    <Heading mt={4}>National Whale Services</Heading>
                </HStack>
                <Image cursor="pointer" src={playing ? "speaker3.png" : "speaker.png"}
                       alt='whale' h={70}
                       onClick={onSpeakerClick}/>
            </Flex>

            <News/>
        </Box>
    );
}

export default App;
