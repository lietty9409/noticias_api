import {Grid, Typography,Pagination,Stack} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from '../components/Noticia'


const ListadoNoticias = () => {

  const {noticias,totalNoticias,handleChangePagina,pagina} = useNoticias()

  const totalPaginas = totalNoticias / 20

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant='h3's
        component={'h2'}
      >
        Últimas Noticias
      </Typography>

      <Grid 
        container
        spacing={2}
      >
        {noticias.map(noticia => (
          <Noticia 
            noticia = {noticia}
            key={noticia.url}
          />

        ))}
      </Grid>

      <Stack 
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          marginY:5
        }}  
      >  
        <Pagination 
          count={totalPaginas} 
          color="primary"
          onChange={handleChangePagina}
          page={pagina} 
        />
      </Stack>  
    </>
  )
}

export default ListadoNoticias
