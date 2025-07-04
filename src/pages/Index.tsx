
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Compass, Star, Flag, Clock, Users, Book, Sun, Map } from 'lucide-react';
import HornOfDawn from '@/components/HornOfDawn';
import RuneOfResolve from '@/components/RuneOfResolve';
import WarTable from '@/components/WarTable';
import ForgeTheFlame from '@/components/ForgeTheFlame';

const Index = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [userName] = useState('Wanderer'); // In real app, this would come from auth

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M15 15l15 15l15-15v30l-15-15l-15 15V15zM0 30l15-15v30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Compass className="w-8 h-8 text-black" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-foreground">NOMAD QUEST™</h1>
                <p className="text-amber-400 font-semibold">Wanderer • Builder • Faithful</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-amber-500 text-amber-400 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                {currentStreak} Day Journey
              </Badge>
              <Button className="journey-ready">
                UPGRADE TO GUIDE
              </Button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Rise, {userName}. The desert calls at dawn.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              "Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Flag className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">7</div>
                <div className="text-sm text-muted-foreground">Journey Days</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Sun className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">5:30 AM</div>
                <div className="text-sm text-muted-foreground">Avg Rise</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Quests Won</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">LOCKED</div>
                <div className="text-sm text-muted-foreground">Caravan</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main App Modules */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <Tabs defaultValue="horn" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50">
            <TabsTrigger value="horn" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              DAWN CALL
            </TabsTrigger>
            <TabsTrigger value="rune" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              DESERT PATH
            </TabsTrigger>
            <TabsTrigger value="war" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              QUEST MAP
            </TabsTrigger>
            <TabsTrigger value="forge" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              OASIS FIRE
            </TabsTrigger>
          </TabsList>

          <TabsContent value="horn">
            <HornOfDawn />
          </TabsContent>

          <TabsContent value="rune">
            <RuneOfResolve />
          </TabsContent>

          <TabsContent value="war">
            <WarTable />
          </TabsContent>

          <TabsContent value="forge">
            <ForgeTheFlame />
          </TabsContent>
        </Tabs>

        {/* Upgrade Prompts */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border-amber-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-400">
                <Users className="w-6 h-6 mr-2" />
                Caravan - Brotherhood ($9/mo)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join the caravan. Share victories, get accountability, and journey alongside other wanderers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Brotherhood feed & challenges</li>
                <li>• Advanced quest gamification</li>
                <li>• Weekly wanderer check-ins</li>
                <li>• Extended Quest Map features</li>
              </ul>
              <Button className="w-full journey-ready">
                JOIN THE CARAVAN
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border-orange-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-400">
                <Map className="w-6 h-6 mr-2" />
                Guide Access ($99/year)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Elite wanderer templates, fasting guides, and the complete Desert Scrolls collection.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Exclusive Desert Scrolls templates</li>  
                <li>• 21-day wanderer onboarding</li>
                <li>• Fasting & vision reset guides</li>
                <li>• Premium dawn call library</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-black py-4 hover:from-orange-600 hover:to-red-700">
                BECOME A GUIDE
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
