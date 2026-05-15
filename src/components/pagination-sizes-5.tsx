import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { TabsTrigger } from "./ui/tabs";

export const title = "Spacious";

const ProjectOverview = () => (
  <div>
    {/* <TabsTrigger value="1"></TabsTrigger>
    <TabsTrigger value="2"></TabsTrigger> */}
    <Pagination>
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationLink href="" >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="" >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
);

export default ProjectOverview;
