import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { SiNintendo } from "react-icons/si"
import { MdPhoneIphone } from "react-icons/md"
import { BsGlobe } from "react-icons/bs"
import { HStack, Icon, Text } from "@chakra-ui/react"
import { IconType } from "react-icons/lib"
import { Platform } from "../hookers/usePlatforms"

interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({platforms}: Props) => {
  const iconMap: {[key: string]: IconType} = {
    android: FaAndroid,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }
  return (
    <HStack marginY={1}>
        {platforms?.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/> )}

    </HStack>
  )
}

export default PlatformIconList