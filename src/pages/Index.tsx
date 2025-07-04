
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Compass, Star, Flag, Clock, Users, Book, Sun, Map, Shield, Sword } from 'lucide-react';
import HornOfDawn from '@/components/HornOfDawn';
import RuneOfResolve from '@/components/RuneOfResolve';
import WarTable from '@/components/WarTable';
import ForgeTheFlame from '@/components/ForgeTheFlame';

const Index = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [userName] = useState('Warrior'); // In real app, this would come from auth

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eab308' fill-opacity='0.1'%3E%3Cpath d='M30 5l15 25h-30z M5 35l25-15v30z M55 35l-25-15v30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-foreground">VIKING MODE™</h1>
                <p className="text-yellow-400 font-semibold">Warrior • Builder • Faithful</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-yellow-500 text-yellow-400 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                {currentStreak} Day Battle
              </Badge>
              <Button className="battle-ready">
                UPGRADE TO JARL
              </Button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Rise, {userName}. Valhalla awaits the victorious.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              "Be strong and courageous! Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." - Joshua 1:9
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Sword className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">7</div>
                <div className="text-sm text-muted-foreground">Battle Days</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">5:30 AM</div>
                <div className="text-sm text-muted-foreground">Avg Rise</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Victories</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">LOCKED</div>
                <div className="text-sm text-muted-foreground">Shield Wall</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main App Modules */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <Tabs defaultValue="horn" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50">
            <TabsTrigger value="horn" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black font-bold">
              HORN OF DAWN
            </TabsTrigger>
            <TabsTrigger value="rune" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black font-bold">
              RUNE OF RESOLVE
            </TabsTrigger>
            <TabsTrigger value="war" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black font-bold">
              WAR TABLE
            </TabsTrigger>
            <TabsTrigger value="forge" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black font-bold">
              FORGE THE FLAME
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
          <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <Users className="w-6 h-6 mr-2" />
                Shield Wall - Brotherhood ($9/mo)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join the shield wall. Share victories, get accountability, and fight alongside your brothers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Brotherhood feed & challenges</li>
                <li>• Advanced battle gamification</li>
                <li>• Weekly warrior check-ins</li>
                <li>• Extended War Table features</li>
              </ul>
              <Button className="w-full battle-ready">
                JOIN THE SHIELD WALL
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border-orange-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-400">
                <Map className="w-6 h-6 mr-2" />
                Jarl Access ($99/year)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Elite warrior templates, battle plans, and the complete Norse Scrolls collection.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Exclusive Norse Scrolls templates</li>  
                <li>• 21-day warrior onboarding</li>
                <li>• Fasting & vision quest guides</li>
                <li>• Premium horn call library</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-black py-4 hover:from-orange-600 hover:to-red-700">
                BECOME A JARL
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
