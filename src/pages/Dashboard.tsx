import SalesChart from "../components/SalesChart"
import { Button } from "../components/ui/button"
import { Card,  CardHeader, CardTitle } from "../components/ui/card"
import { cn } from "../lib/utils"
import BuildingPdt from "../components/BuildingPdt"
import OverviewCard from "@/components/OverviewCard"
import { Home, User } from "lucide-react";
import React from "react"


const Dashboard = () => {
  return (
    <React.Fragment>
       <Card className="w-full rounded-2xl  items-center">
      
       

<div className="flex items-center gap-2 flex-col md:flex-row">


   <div className=" w-[85%]  ">
                    <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                <CardTitle className="text-lg md:text-xl">Sales Overview</CardTitle>
                <p className="text-sm text-muted-foreground">
                    Showing overview Jan 2022 - Sep 2022
                </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                <Button variant="outline" className="rounded-full text-xs md:text-sm">
                    View Transactions
                </Button>

                <div className="flex rounded-full bg-muted p-1 text-xs md:text-sm">
                    {["1 Week", "1 Month", "1 Year"].map((item, i) => (
                    <button
                        key={item}
                        className={cn(
                        "rounded-full px-3 py-1 transition",
                        i === 2 ? "bg-white shadow-sm" : "text-muted-foreground"
                        )}
                    >
                        {item}
                    </button>
                    ))}
                </div>
                </div>
            </CardHeader>


        
                <div className="flex flex-col lg:flex-row gap-5">
                    {/* Chart Section */}
                    <div className="w-full lg:w-2/3">
                    <div className="h-[220px] w-full rounded-lg border bg-muted/20 p-4 text-center text-sm text-muted-foreground">
                        <SalesChart />
                    </div>
                    </div>

                


            <div className="flex flex-col md:flex-row gap-5 mt-10 md-mt-0">
                <div className="flex flex-col gap-3 w-full  md:w-1/2">
                    <StatCard
                    amount="₦120,000,000.00"
                        colour="text-blue-600"       

                    title="Total Inflow"
                    percent="+2.5%"
                    positive
                    />
                    <StatCard
                    amount="₦200,000,000.00"
                    colour="text-green-600"    

                    title="Commission Revenue"
                    percent="+0.5%"
                    positive
                    />
                    
                </div>

                <div className="flex flex-col gap-3 w-full  ">
                    <StatCard
                    amount="₦50,000,000.00"
                        colour="text-green-600"   

                    title="MRR"
                    percent="+2.5%"
                    positive
                    />
                    <StatCard
                    amount="₦100,000,000.00"
                    colour="text-red-600"
                    title="GMV"
                    percent="-0.5%"
                    positive={false}
                    />
                </div>
                
                


        </div>




        
        </div>
</div>






    <div className="w-full p-5 md:p-0 lg:w-1/4 mt-10">
            <OverviewCard
            title="Listings Overview"
                icon={Home}
            stats={[
            { label: "Total", value: "1.8k" },
            { label: "Active", value: "80" },
            { label: "Archived", value: "1k" },
            ]}
        />

        <div className="pt-5">
            <OverviewCard
                title="Users"
                icon={User}
                stats={[
                { label: "Total", value: "20.7k"},
                { label: "Riders", value: "8.5k"},
                { label: "Subscribers", value: "7.5k"},
                ]}
            />
        </div>
     
    </div>
</div>


      
        </Card>
  
      
    <div>
        <BuildingPdt />
     </div>


    </React.Fragment>
  )
}

type StatProps = {
    amount: string
    colour: string
  title: string
  percent: string
  positive?: boolean
}

function StatCard({ title, amount, colour, percent, positive = true }: StatProps) {
  return (
    <div className="rounded-xl border  bg-background">
      <h3 className={`mt-1 text-lg  font-semibold ${colour}`}>{amount}</h3>


    <div className="flex items-center gap-3">
     <p className="text-xs ">{title}</p>

      <div
        className={cn(
          "mt-1 inline-flex items-center gap-1 text-[10px] font-medium",
          positive ? "text-green-600" : "text-red-600"
        )}
      >
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            positive ? "bg-green-600" : "bg-red-600"
          )}
        />
        {percent}
      </div>

      </div>
    </div>
  )
}

export default Dashboard
