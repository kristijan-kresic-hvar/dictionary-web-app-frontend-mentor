export const handleFontChange = (font: string): void => {
  switch (font) {
    case 'sansserif':
      document.body.style.fontFamily = 'Inter, sans-serif'
      break
    case 'serif':
      document.body.style.fontFamily = 'Lora, serif'
      break
    case 'mono':
      document.body.style.fontFamily = 'Inconsolata, monospace'
      break
    default:
      document.body.style.fontFamily = 'Inter, sans-serif'
  }
}
