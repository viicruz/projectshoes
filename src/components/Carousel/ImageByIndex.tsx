export const images: string[] = ["/chut1.webp", "/chut2.webp", "/chut3.webp", "/chut4.webp" ,"/chut5.jpg", "/chut6.jpg" ]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
