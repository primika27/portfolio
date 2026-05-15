import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const title = "Spacious";

const images = [
  "/img/LoginPage.png",
  "/img/2FactAuth.png",
  "/img/DashBoard.png",
  "/img/OrderEmailUpdate.png",
];

const ProjectOverview = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <img src={selectedImage} alt="Visual overview" />
      <Pagination>
        <PaginationContent className="gap-3">
          {images.map((image, index) => (
            <PaginationItem key={image}>
              <Button
                type="button"
                variant={selectedImage === image ? "outline" : "ghost"}
                size="icon"
                onClick={() => setSelectedImage(image)}
              >
                {index + 1}
              </Button>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
export default ProjectOverview;
