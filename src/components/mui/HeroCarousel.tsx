import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
  images: string[];
}

const visibleTiles = 4;
const tileAreas = ['a', 'b', 'c', 'd'] as const;

export default function HeroCarousel({ images }: Props) {
  const maxStart = Math.max(0, images.length - visibleTiles);
  const windowCount = maxStart + 1;

  return (
    <Box
      data-carousel
      data-images={JSON.stringify(images)}
      role="region"
      aria-roledescription="carousel"
      aria-label="City Health Office photos"
      sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          backgroundImage:
            'radial-gradient(rgba(46, 125, 50, 0.12) 1px, transparent 1px), linear-gradient(rgba(38, 50, 56, 0.18), rgba(38, 50, 56, 0.18))',
          backgroundSize: '24px 24px, 100% 100%',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          px: '3px',
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: '2fr 1fr 1fr' },
          gridTemplateRows: { xs: 'repeat(2, minmax(8rem, 1fr))', md: 'repeat(2, minmax(0, 1fr))' },
          gridTemplateAreas: { xs: '"a b" "c d"', md: '"a b c" "a d d"' },
          gap: '3px',
        }}
      >
        {images.slice(0, visibleTiles).map((src, index) => (
          <Box
            data-tile
            key={src}
            sx={{ gridArea: tileAreas[index], overflow: 'hidden', minHeight: 0 }}
          >
            <Box
              component="img"
              src={src}
              alt=""
              loading={index === 0 ? 'eager' : 'lazy'}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'saturate(0.78) contrast(0.96) brightness(0.94)',
                display: 'block',
              }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          backdropFilter: 'blur(6px)',
        }}
      >
        <IconButton
          data-carousel-prev
          size="small"
          aria-label="Previous photos"
          sx={{ width: 36, height: 36, bgcolor: 'rgba(255, 255, 255, 0.88)', border: '1px solid rgba(255, 255, 255, 0.9)', color: 'primary.dark' }}
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        <Typography
          data-carousel-counter
          component="span"
          aria-live="polite"
          sx={{
            px: 0.75,
            py: 0.25,
            bgcolor: 'rgba(255, 255, 255, 0.88)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'primary.dark',
            fontVariantNumeric: 'tabular-nums',
            whiteSpace: 'nowrap',
          }}
        >
          1–{visibleTiles} / {images.length}
        </Typography>
        <IconButton
          data-carousel-next
          size="small"
          aria-label="Next photos"
          sx={{ width: 36, height: 36, bgcolor: 'rgba(255, 255, 255, 0.88)', border: '1px solid rgba(255, 255, 255, 0.9)', color: 'primary.dark' }}
        >
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box
        data-carousel-dots
        role="group"
        aria-label="Select photo group"
        sx={{ position: 'absolute', top: 64, right: 20, zIndex: 3, display: 'flex', gap: 0.35 }}
      >
        {Array.from({ length: windowCount }, (_, index) => (
          <Box
            component="button"
            type="button"
            key={index}
            data-carousel-dot={index}
            aria-label={`Show photos ${index + 1} to ${index + visibleTiles}`}
            aria-current={index === 0 ? 'true' : 'false'}
            disabled={index > maxStart}
            sx={{
              width: 8,
              height: 8,
              p: 0,
              border: 0,
              borderRadius: '999px',
              bgcolor: 'rgba(255, 255, 255, 0.7)',
              transition: 'width 200ms, background-color 200ms',
              '&[aria-current="true"]': { width: 20, bgcolor: 'primary.main' },
              '&:disabled': { opacity: 0.35 },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
