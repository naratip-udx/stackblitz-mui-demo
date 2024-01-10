import { FC } from 'react';
import {
  Box,
  TextField,
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import PageviewIcon from '@mui/icons-material/Pageview';
import SearchIcon from '@mui/icons-material/Search';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <form noValidate autoComplete="off">
      <Box
        component="fieldset"
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        <legend>ชื่อ</legend>
        <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}>
          <FormControl sx={{ width: '50%' }} size="small">
            <InputLabel id="title-lbl" shrink={true}>
              คำนำหน้า
            </InputLabel>
            <Select
              labelId="title-lbl"
              id="title"
              defaultValue={10}
              label="คำนำหน้า"
              notched={true}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Mr.</MenuItem>
              <MenuItem value={20}>Mrs.</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <FormControl size="small">
          <FormLabel id="gender" style={{ fontSize: '0.8rem' }}>
            เพศ
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender"
            name="gender-group"
            defaultValue="male"
          >
            <FormControlLabel
              value="male"
              control={<Radio size="small" />}
              label="ชาย"
            />
            <FormControlLabel
              value="female"
              control={<Radio size="small" />}
              label="หญิง"
            />
          </RadioGroup>
        </FormControl>
        <Stack spacing={1} direction="row"></Stack>
        <Stack spacing={1} direction="row"></Stack>

        <TextField
          type="text"
          variant="outlined"
          label="ชื่อ (ไทย)"
          defaultValue="สดใส"
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          sx={{ marginTop: 1 }}
        />
        <TextField
          type="text"
          variant="outlined"
          label="นามสกุล (ไทย)"
          defaultValue="สุขสันต์"
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          sx={{ marginTop: 1 }}
        />
        <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}>
          <TextField
            type="text"
            variant="outlined"
            label="ชื่อเล่น (ไทย)"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            style={{ width: '50%' }}
          />
        </Stack>
        <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}></Stack>

        <TextField
          type="text"
          variant="outlined"
          label="ชื่อ (อังกฤษ)"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          sx={{ marginTop: 1 }}
        />
        <TextField
          type="text"
          variant="outlined"
          label="นามสกุล (อังกฤษ)"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          sx={{ marginTop: 1 }}
        />
        <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}>
          <TextField
            type="text"
            variant="outlined"
            label="ชื่อเล่น (อังกฤษ)"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            style={{ width: '50%' }}
          />
        </Stack>
        <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}></Stack>
      </Box>

      <Box
        component="fieldset"
        sx={{
          marginTop: 1,
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        <legend>คำที่ใช้ในการค้นหา</legend>
        <TextField
          type="text"
          variant="outlined"
          label="คำที่ใช้ค้นหา 1"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          sx={{ marginTop: 1 }}
        />
        <TextField
          type="text"
          variant="outlined"
          label="คำที่ใช้ค้นหา 2"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          sx={{ marginTop: 1 }}
        />
      </Box>

      <Box
        component="fieldset"
        sx={{
          marginTop: 1,
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        <legend>ที่อยู่</legend>
        <TextField
          type="text"
          variant="outlined"
          label="ชื่อโครงการ/อาคาร"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          sx={{ marginTop: 1 }}
        />
        <Stack
          spacing={1}
          direction="row"
          sx={{ marginBottom: 1, marginTop: 1 }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="หมายเลขห้อง"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            type="text"
            variant="outlined"
            label="ชั้น"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          sx={{ marginBottom: 1, marginTop: 1 }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="เลขที่"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            label="หมู่ที่"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          sx={{ marginBottom: 1, marginTop: 1 }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="ซอย"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            type="text"
            variant="outlined"
            label="ถนน"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Stack>
        <TextField
          type="text"
          variant="outlined"
          label="ตำบล/แขวง"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="text"
          variant="outlined"
          label="อำเภอ/เขต"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="text"
          variant="outlined"
          label="จังหวัด"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack
          spacing={1}
          direction="row"
          sx={{ marginBottom: 1, marginTop: 0 }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="รหัสไปรษณีย์"
            defaultValue=""
            size="small"
            InputLabelProps={{ shrink: true }}
            style={{ width: '50%' }}
          />
        </Stack>
        <TextField
          type="text"
          variant="outlined"
          label="GPS"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField
          type="text"
          variant="outlined"
          label="Line ID/Website"
          defaultValue=""
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Box>

      <Box textAlign="center" sx={{ marginTop: 2 }}>
        <Button variant="contained" type="submit">
          บันทึก
        </Button>
        <Button variant="outlined" type="reset" style={{ marginLeft: 8 }}>
          เคลียร์หน้าจอ
        </Button>
      </Box>
    </form>
  );
};
