import HeadInfo from "../components/headInfo"
import SlideRight from "../motion/slideRight"
import SlideAnimation from "../motion/slideAnimation"
import SubTitle from "../components/subtitle"
import SkillStack from "../components/skillStack"
import { List, ListItem, ListIcon, Center } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"

const skill = () => {
    
    return(
        <>
            <HeadInfo title='Skill' />

            <SlideRight>
                <SubTitle txt='Skill' />
            </SlideRight>

            <SlideAnimation>
                
                {/* Skill Stack */}
                <SkillStack/>

                <Center p='30px 0 50px 0'>
                    <List spacing={3} fontSize='1.2em'>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />웹표준, 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />HTML/CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />Vanila JS와 제이쿼리를 사용하여 DOM 객체를 제어할 수 있습니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />AWS EC2, MySQL/MongoDB와 Express를 연동한 클라이언트와 서버를 구성 할 수 있습니다.
                        </ListItem>
                    </List>
                </Center>

            </SlideAnimation>
        </>
    )
}

export default skill