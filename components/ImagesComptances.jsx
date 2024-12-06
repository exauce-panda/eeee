import competance from '@/public/evenData/competance.json'
function ImageGallery({ id }) {
  // Trouvez l'image correspondant à l'ID passé en prop
  const selectedImage = competance.find((image) => image.id === id);
  return (
    <div>
      {selectedImage ? (
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          style={{ width: "70px", margin: "10px" }}
        />
      ) : (
        <p>Aucune image trouvée pour l'ID {id}</p>
      )}
    </div>
  );
}
export default ImageGallery;
