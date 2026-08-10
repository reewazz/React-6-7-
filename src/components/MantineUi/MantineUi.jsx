import { Button, CopyButton, PasswordInput, RollingNumber, Select, Switch, Tabs, Text, TextInput } from '@mantine/core'
import { ImageIcon, MessageCircleCheck, Settings } from 'lucide-react'
import React, { useState } from 'react'

const MantineUi = () => {

    const [count,setCount] = useState(0)
  return (
  <div className="flex justify-center">
      <div className=' w-1/4 flex-col gap-4'>
          
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>


     <div className='flex gap-4 '>
        <Button onClick={()=>setCount(count-1)} variant='outline' >-</Button>
            <RollingNumber value={count} fz="36px" />
        <Button onClick={()=>setCount(count+1)} variant='outline' >+</Button>

     </div>
     
 <TextInput
      label="Full Name"
      placeholder="Your name"
    />

    <PasswordInput
      label="Password"
      placeholder="Your password"
    />


 <Switch
      defaultChecked
      label="I agree to sell my privacy"
    />

    <select name="" id="">
        <option value="">china</option>
        <option value="">nepal</option>
        <option value="">india</option>
    </select>

    <Select
      label="Category"
      placeholder="Select any category"
      data={['Food', 'Transportation', 'Education', 'Others']}
      defaultValue={"Food"}
      searchable
    />


  <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<ImageIcon size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<MessageCircleCheck size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<Settings size={12} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
       This is gallery
      </Tabs.Panel>

      <Tabs.Panel value="messages">
       This is message
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>

        <Button  variant="filled">Submit</Button>

         <CopyButton value="Riwaj Neupane">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
    </div>
  </div>
  )
}

export default MantineUi