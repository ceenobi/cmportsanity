import { Flex } from '@chakra-ui/react'
import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

export default function Spinner() {
  return (
    <Flex justify='center' align='center' h='100vh'>
      <SyncLoader color='#078f30' size={20} />
    </Flex>
  )
}
