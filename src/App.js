import './App.css';
import {Center, Container, Flex, Heading, HStack, useBoolean} from "@chakra-ui/react";
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
        <Container px={6} py={4} my={12} maxW="container.md">
            <Flex justify="space-between" align="center">
                <HStack align="center" spacing={6}>
                    <Image src='nws-logo.png' alt='whale' h={[65, 150]} bg={"blue.200"} p={2} rounded="100%"/>
                    <Heading mt={4} size={["md", "xl"]}>National Whale Services</Heading>
                </HStack>
                <Image cursor="pointer" src={playing ? "speaker3.png" : "speaker.png"}
                       alt='whale' h={[42, 70]}
                       onClick={onSpeakerClick}/>
            </Flex>

            <News/>

            <Center>
                <Image src='whaleterloo.png' alt='whale'/>
            </Center>
        </Container>
    );
}

export default App;
