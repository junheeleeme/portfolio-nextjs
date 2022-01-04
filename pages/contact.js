import HeadInfo from "../components/headInfo"
import SlideRight from "../motion/slideRight"
import SlideAnimation from "../motion/slideAnimation"
import SubTitle from "../components/subtitle"
import { useToast as UseToast } from '@chakra-ui/react'
import { useRef as UseRef } from "react"
import { Heading, List, ListItem, Input, Link, Box, Tooltip } from "@chakra-ui/react"
import { LinkIcon, CopyIcon } from "@chakra-ui/icons"

const contact = () => {
    const toast = UseToast();
    const toastIdRef = UseRef();
    const email = UseRef(null);
    const phone = UseRef(null);

    const copyLink = (e) => {
                
        const opt = e.target.getAttribute('data-option');

        if(opt === '0'){
            email.current.select();
            document.execCommand('copy');
        }else{
            phone.current.select();
            document.execCommand('copy');
        }
        toastIdRef.current = toast({ status: 'success', description: '복사 완료!', duration: 2000 })
    }

    return(
        <>
            <HeadInfo title='Contact' />
            <SlideRight>
                <SubTitle txt='Contact' />
            </SlideRight>
            
            <Box position='absolute' bottom='50px' left='15px' overflow='hidden'>
            <SlideAnimation> 
                <Heading as='h3' size='3xl' pb='50px' wordBreak='keep-all' lineHeight='1.2em'>방문해 주셔서 감사합니다.</Heading>
                <List spacing={2} fontSize="1.3em">
                    <ListItem>
                        🧑🏻  이준희(Lee JunHee)
                    </ListItem>
                    <ListItem>
                        ✉️ macjjuni@gmail.com<Tooltip label='Copy'><CopyIcon cursor='pointer' ml="10px" data-option="0" onClick={copyLink}/></Tooltip>
                    </ListItem>
                    <ListItem>
                        📱 (+82) 010-5183-1652<Tooltip label='Copy'><CopyIcon cursor='pointer' ml="10px" data-option="1" onClick={copyLink}/></Tooltip>
                    </ListItem>
                    <ListItem>
                        📝 Tistory Blog<Link href="https://juni-official.tistory.com/" target='_blank' ml='10px'><LinkIcon borderRadius='5px'/></Link>
                    </ListItem>
                    <ListItem>
                        🧑🏻‍💻 GitHub<Link href="https://github.com/junheeleeme" target='_blank' ml='10px'><LinkIcon borderRadius='5px'/></Link>
                    </ListItem>
                </List>
                <Input position="absolute" bottom='-9999px' type="text" defaultValue="macjjuni@gmail.com" ref={email} readOnly/>
                <Input position="absolute" bottom='-9999px' type="text" defaultValue="010-5183-1652" ref={phone} readOnly/>
            </SlideAnimation>
            </Box>

            
        </>
    )
}

export default contact