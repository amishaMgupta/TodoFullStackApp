import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { Todo } from '../model/todo.ts';

interface todoProp{
    todo:Todo
} 
function TodoCard({todo}:todoProp) {
return (<>
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
        <Card key={todo.id}>
         
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {todo.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {todo.description}
              </Typography>
            </CardContent>
        </Card>
    </Box>
</>)
}
export default TodoCard;