import HeadInfo from "../components/headInfo.js"
import SubTitle from "../components/subtitle.js"
import { useToast as UseToast } from '@chakra-ui/react'
import { useRef as UseRef } from "react"
import { Heading, List, ListItem, Input, Link, Tooltip, Box } from "@chakra-ui/react"
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
            <Box p='relative' pb='0px'>
                <SubTitle txt='Contact' />

                <Heading as='h3' size='2xl' p={{base: '30px 0 30px', lg: '150px 0 30px'}} wordBreak='keep-all' lineHeight='1.2em'>방문해 주셔서 감사합니다.</Heading>
                <List spacing={2} fontSize="1.1em">
                    <ListItem>
                        🧑🏻  이준희(Lee JunHee)
                    </ListItem>
                    <ListItem>
                        ✉️ macjjuni@gmail.com
                        <Tooltip label='복사하기'><CopyIcon cursor='pointer' ml="10px" data-option="0" onClick={copyLink}/></Tooltip>
                    </ListItem>
                    <ListItem>
                        📱 (+82) 010-5183-1652
                        <Tooltip label='복사하기'><CopyIcon cursor='pointer' ml="10px" data-option="1" onClick={copyLink}/></Tooltip>
                    </ListItem>
                    <ListItem>
                        📝 Tistory Blog
                        <Link href="https://juni-official.tistory.com/" target='_blank' ml='10px'><Tooltip label='새 탭에서 열기'><LinkIcon borderRadius='5px'/></Tooltip></Link>
                    </ListItem>
                    <ListItem>
                        🧑🏻‍💻 GitHub
                        <Link href="https://github.com/junheeleeme" target='_blank' ml='10px'><Tooltip label='새 탭에서 열기'><LinkIcon borderRadius='5px'/></Tooltip></Link>
                    </ListItem>
                </List>
            </Box>
            <Input position="absolute" bottom='-9999px' type="text" defaultValue="macjjuni@gmail.com" ref={email} readOnly/>
            <Input position="absolute" bottom='-9999px' type="text" defaultValue="010-5183-1652" ref={phone} readOnly/>
        </>
    )
}

export default contact