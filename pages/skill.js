import HeadInfo from "../components/headInfo.js"
import SubTitle from "../components/subtitle.js"
import SkillStack from "../components/skillStack.js"
import { motion } from "framer-motion"
import { List, ListItem, ListIcon, Center } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"


const skill = () => {
    
    const delay = [0.4, 0.8, 1.2, 1.6, 2.0];
    const skills = [
        '웹표준, 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.',
        'HTML/CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.',
        'CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.',
        'Vanila JS와 제이쿼리를 사용하여 DOM 객체를 제어할 수 있습니다.',
        'AWS EC2, MySQL/MongoDB와 Express를 연동한 클라이언트와 서버를 구성 할 수 있습니다.'
    ]

    

    return(
        <>
            <HeadInfo title='Skill' />

            
                <SubTitle txt='Skill' />
            
                {/* Skill Stack */}
                <SkillStack/>
            
                <Center p='30px 0 50px 0'>
                    <List spacing={3} fontSize='1.2em'>
                        {
                            skills.map((s, idx) =>
                            
                                <ListItem key={idx}>
                                    <motion.div transition={}>
                                        <ListIcon as={CheckCircleIcon} color='green.500' />{s}
                                    </motion.div>
                                </ListItem>
                            )
                        }
                    </List>
                </Center>
        </>
    )
}

export default skill