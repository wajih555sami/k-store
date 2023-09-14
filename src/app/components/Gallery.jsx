import Grid from '@mui/material/Grid';
import Image from 'next/image';

export default function Gallery(){
    return (
        <Grid container spacing={2} className="hold-gallery">
            <Grid item md={6}>
                <div className='box big-img'>
                    <Image src='/img/gallery.png' alt='img gallery' width={575} height={595} />
                </div>
            </Grid>
            <Grid item md={6}>
                <div className='box small-img'>
                    <div className='s-img'>
                        <Image src='/img/gallery2.png' alt='img gallery' width={575} height={285} />
                    </div>
                    <div className='s-img'>
                        <Image src='/img/gallery3.png' alt='img gallery' width={575} height={285} />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}