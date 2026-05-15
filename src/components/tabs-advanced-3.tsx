import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectOverview from "./pagination-sizes-5";

export const title = "Nested Tabs";

const MainTab = () => (
  <Tabs className="main-tabs" style={{ width: '100%', maxWidth: '100%', maxHeight: '100%' }} defaultValue="profile">
    <TabsList className="main-tabs-list">
      <TabsTrigger value="profile">Who am I?</TabsTrigger>
      <TabsTrigger value="projects">Projects</TabsTrigger>
    </TabsList>
    <TabsContent value="profile">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 text-lg font-semibold" style={{ alignItems: 'center' }}>Profile</h3>
        <Tabs defaultValue="personal">
          <TabsList>
            <TabsTrigger value="personal">Get to know me!</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium">Full Name</p>
                <p className="text-sm text-muted-foreground">Pimika Khayargoli</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  kprimika@yahoo.com
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  Montréal, CA
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Language</p>
                <p className="text-sm text-muted-foreground">English, French</p>
              </div>
              <div>
                <p className="text-sm font-medium">Frameworks</p>
                <p className="text-sm text-muted-foreground">
                  Spring Boot, React, Node.js
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Programming languages</p>
                <p className="text-sm text-muted-foreground">
                  Java, JavaScript, TypeScript, Python
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TabsContent>
    <TabsContent value="projects">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">Projects</h3>
        <Tabs defaultValue="one">
          <TabsList className="nested-tabs-list">
            <TabsTrigger value="one">BrokerX</TabsTrigger>
            <TabsTrigger value="two">PasswordVault</TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium">Description</p>
                <p className="text-sm text-muted-foreground">A web application for managing broker relationships and transactions.</p>
              </div>
              <div>
                <p className="text-sm font-medium">Overview</p>
                <ProjectOverview />
              </div>
              <div>
                <p className="text-sm font-medium">Project Link: </p>
                <a href="https://github.com/primika27/BrokerX-phase3-eventDriven" className="text-sm text-muted-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                  https://github.com/primika27/BrokerX-phase3-eventDriven
                </a>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="two">
            <div className="mt-4 space-y-3 rounded-md border p-4">
               <div>
                <p className="text-sm font-medium">Description</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
              <div>
                <p className="text-sm font-medium">Overview</p>
                <p className="text-sm text-muted-foreground">January 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">Project Link: </p>
                <p className="text-sm text-muted-foreground">January 2024</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TabsContent>
  </Tabs>
);

export default MainTab;
