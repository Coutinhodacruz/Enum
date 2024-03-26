// ProgramSelection.tsx
import React from 'react';
import { MenuItem, Select } from '@mui/material';




interface Program {
    id: string;
    programName: string;
    
  }
  
  
  interface ProgramSelectionProps {
    programs: Program[]; 
    value: any;
    onChange?: () => void;
  }
  


const ProgramSelection:React.FC<ProgramSelectionProps> = ({ programs, value, onChange }) => {
  return (
    <>
    {/*{programs && programs.length > 0 ? (*/}
    <Select autoComplete='' className="w-[381px]" value={value} name="program" onChange={onChange}>
      {/*{programs.map((program) => (*/}
        
        <MenuItem value={'timo'}>
         hghg
        </MenuItem>
      {/*))}*/}
    </Select>
  </>
  );
};

export default ProgramSelection;
