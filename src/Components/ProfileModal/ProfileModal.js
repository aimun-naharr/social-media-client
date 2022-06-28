import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({openModal, setOpenModal}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      size='55%'
      overlayBlur={3}
      opened={openModal}
      onClose={()=>setOpenModal(false)}
    >
      <form className='infoForm'>
        <h3>Your Info</h3>
        <div>
<input className='infoInput' placeholder='First name' type='text' name='firstName'/>
<input className='infoInput' placeholder='Last name' type='text' name='lastName'/>
</div>
<div>
<input className='infoInput' placeholder='Works At' type='text' name='worksAt'/>
</div>
<div>
<input className='infoInput' placeholder='Lives In' type='text' name='livesIn'/>
<input className='infoInput' placeholder='Country' type='text' name='country'/>
</div>
<div>
<input className='infoInput' placeholder='Relationship Status' type='text' name='status'/>
</div>
<div>
  Profile Image
  <input type='file' name='profileImg'/>
  Cover Image
  <input type='file' name='coverImg'/>
</div>
<button style={{height: '3rem'}} className='button'>Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModal