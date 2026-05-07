import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  Bot,
  Users,
  Wrench,
  Phone,
  Layers,
  Activity,
  Beaker,
  FileText,
  BarChart2,
  LayoutDashboard,
  FileJson,
  Key,
  Blocks,
  PhoneIncoming,
  RefreshCw,
  Download,
  XCircle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  PanelLeftClose,
  User,
  Play,
  Pause,
  Copy,
  ExternalLink,
  MessageSquare,
  Clock,
  DollarSign,
  Menu,
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react';

const callsData = [
  {
    id: "019d1df1-da7...",
    fullId: "019d1df1-da7e-4b8a-9c2f-1a2b3c4d5e6f",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (267) 259 3105",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "0",
    startTime: "24. März 2026, 11:44",
    duration: "1m 37s",
    cost: "0,19 €",
    transcript: [
      { speaker: "Assistent", text: "Hallo. Vielen Dank für Ihren Anruf. Hier ist Ava. Damit ich Sie richtig weiterleiten kann: Rufen Sie als Kunde an oder als Geschäftsinhaber, der wissen möchte, wie das funktioniert?", time: "11:44:43 (GMT+1)" },
      { speaker: "Nutzer", text: "Kunde.", time: "11:44:58 (GMT+1)" },
      { speaker: "Assistent", text: "Verstanden. Ich kann Ihnen dabei helfen. Was kann ich heute für Sie tun?", time: "11:44:59 (GMT+1)" },
      { speaker: "Nutzer", text: "Hallo?", time: "11:45:17 (GMT+1)" }
    ]
  },
  {
    id: "019d1df0-b8c...",
    fullId: "019d1df0-b8c1-4d2e-a1f3-9b8c7d6e5f4a",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (267) 977 5048",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "0",
    startTime: "24. März 2026, 11:43",
    duration: "0m 45s",
    cost: "0,08 €",
    transcript: [
      { speaker: "Assistent", text: "Hallo, hier ist Ava. Wie kann ich Ihnen heute helfen?", time: "11:43:05 (GMT+1)" },
      { speaker: "Nutzer", text: "Ich benötige Hilfe mit meinem Konto.", time: "11:43:15 (GMT+1)" }
    ]
  },
  {
    id: "019d0217-f1a...",
    fullId: "019d0217-f1a2-4b3c-9d8e-7f6a5b4c3d2e",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (202) 491 0902",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "0",
    startTime: "19. März 2026, 01:56",
    duration: "2m 10s",
    cost: "0,25 €",
    transcript: []
  },
  {
    id: "019d010d-e4b...",
    fullId: "019d010d-e4b5-4c6d-8e7f-1a2b3c4d5e6f",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (717) 637 4394",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "100",
    startTime: "18. März 2026, 21:05",
    duration: "5m 20s",
    cost: "0,65 €",
    transcript: []
  },
  {
    id: "019d0057-c3d...",
    fullId: "019d0057-c3d4-4e5f-a1b2-9c8d7e6f5a4b",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (717) 778 4536",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "N/A",
    startTime: "18. März 2026, 17:46",
    duration: "1m 05s",
    cost: "0,12 €",
    transcript: []
  },
  {
    id: "019d0053-a1b...",
    fullId: "019d0053-a1b2-4c3d-9e8f-7a6b5c4d3e2f",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (717) 677 0077",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "N/A",
    startTime: "18. März 2026, 17:42",
    duration: "0m 30s",
    cost: "0,05 €",
    transcript: []
  },
  {
    id: "019cfbdc-9f8...",
    fullId: "019cfbdc-9f8e-4d7c-b6a5-1c2d3e4f5a6b",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (412) 732 0186",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "N/A",
    startTime: "17. März 2026, 20:53",
    duration: "3m 45s",
    cost: "0,42 €",
    transcript: []
  },
  {
    id: "019cfbda-8e7...",
    fullId: "019cfbda-8e7f-4c6d-a5b4-9d8c7b6a5f4e",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava-Rufnummer",
    customerPhone: "+1 (412) 232 3015",
    type: "Eingehend",
    endedReason: "Kunde hat aufgelegt",
    successEval: "-",
    score: "N/A",
    startTime: "17. März 2026, 20:50",
    duration: "0m 15s",
    cost: "0,02 €",
    transcript: []
  }
];

export function Dashboard() {
  const [expandedCallId, setExpandedCallId] = useState<string | null>(null);
  const [playingCallId, setPlayingCallId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const togglePlay = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (playingCallId === id) {
      setPlayingCallId(null);
    } else {
      setPlayingCallId(id);
      setProgress(0);
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setPlayingCallId(null);
            return 0;
          }
          return p + 1;
        });
      }, 1000);
      // Store interval to clear it if needed (simplified for demo)
      (window as any).playbackInterval = interval;
    }
  };

  const toggleExpand = (id: string) => {
    if (expandedCallId === id) {
      setExpandedCallId(null);
    } else {
      setExpandedCallId(id);
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-gray-300 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {!sidebarOpen && (
        <button 
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#1a1a1a] rounded-md border border-[#262626]"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-5 h-5 text-gray-300" />
        </button>
      )}

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 fixed md:relative z-40 w-[260px] h-full flex-shrink-0 border-r border-[#262626] bg-[#0a0a0a] flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          <div className="font-bold text-xl text-white tracking-tight">AI Receptionist</div>
          <PanelLeftClose 
            className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer" 
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-md p-2 mb-4 cursor-pointer hover:bg-[#262626] transition-colors">
            <div className="w-6 h-6 rounded bg-emerald-900 text-emerald-400 flex items-center justify-center text-xs font-bold">P</div>
            <span className="text-sm truncate text-gray-200">paoloesteban75@gmail.com's O...</span>
          </div>
          
          <div className="relative mb-6">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-[#1a1a1a] border border-[#262626] rounded-md py-1.5 pl-9 pr-8 text-sm focus:outline-none focus:border-gray-500 text-gray-200 placeholder-gray-500"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 hidden lg:flex">
              <kbd className="bg-[#262626] rounded px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">⌘</kbd>
              <kbd className="bg-[#262626] rounded px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">K</kbd>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-20">
          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">KI-LABOR <span className="ml-1 text-[10px] font-normal border border-gray-700 rounded-full px-1.5 py-0.5">Info</span></div>
            <NavItem icon={<Sparkles className="w-4 h-4" />} label="Komponist" badge="Alpha" />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">ERSTELLEN</div>
            <NavItem icon={<Bot className="w-4 h-4" />} label="Assistenten" />
            <NavItem icon={<Users className="w-4 h-4" />} label="Teams" />
            <NavItem icon={<Wrench className="w-4 h-4" />} label="Werkzeuge" />
            <NavItem icon={<Phone className="w-4 h-4" />} label="Telefonnummern" />
            <NavItem icon={<Layers className="w-4 h-4" />} label="Ressourcen" hasChevron />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">TESTEN</div>
            <NavItem icon={<CheckCircle2 className="w-4 h-4" />} label="Bewertungen" badge="Beta" />
            <NavItem icon={<Beaker className="w-4 h-4" />} label="Test-Suiten" />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">ÜBERWACHEN</div>
            <NavItem icon={<FileText className="w-4 h-4" />} label="Protokolle" active />
            <NavItem icon={<BarChart2 className="w-4 h-4" />} label="Metriken" />
            <NavItem icon={<LayoutDashboard className="w-4 h-4" />} label="Boards" />
            <NavItem icon={<FileJson className="w-4 h-4" />} label="Ausgaben" />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">VERWALTEN</div>
            <NavItem icon={<Key className="w-4 h-4" />} label="API-Schlüssel" />
            <NavItem icon={<Blocks className="w-4 h-4" />} label="Integrationen" />
          </div>
        </div>

        <div className="p-4 border-t border-[#262626] bg-[#0a0a0a] mt-auto">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs text-gray-400">PAYG</span>
            <span className="text-sm text-gray-200 font-medium">7,00 <span className="text-xs text-gray-500 font-normal">Guthaben</span></span>
          </div>
          <button className="w-full py-2 bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] rounded-md text-sm font-medium text-gray-300 transition-colors flex items-center justify-center gap-2">
            <span className="text-emerald-500">↑</span> Guthaben kaufen
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0a0a0a] relative z-0">
        {/* Header */}
        <div className={`px-4 md:px-8 py-4 md:py-6 border-b border-[#262626] ${!sidebarOpen ? 'pl-16 md:pl-8' : ''}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
              <h1 className="text-lg md:text-xl font-semibold text-gray-200">Protokolle</h1>
            </div>
            <span className="text-xs md:text-sm text-gray-500 md:ml-2">Anrufprotokolle Ihres Kontos einsehen und verwalten.</span>
          </div>
          
          <div className="flex gap-4 md:gap-6 text-sm overflow-x-auto custom-scrollbar pb-1">
            <div className="text-white border-b-2 border-white pb-2 font-medium cursor-pointer whitespace-nowrap">Anrufe</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors whitespace-nowrap">Chat</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors whitespace-nowrap">Sitzungen</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors whitespace-nowrap">Webhooks</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors whitespace-nowrap">API</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-4 md:px-8 py-4 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
            <FilterButton label="Alle Anrufe" count={8} active />
            <FilterButton label="Weitergeleitet" count={0} icon={<RefreshCw className="w-3 h-3" />} />
            <FilterButton label="Erfolgreich" count={7} icon={<CheckCircle2 className="w-3 h-3" />} />
            <FilterButton label="Fehlgeschlagen" count={0} icon={<XCircle className="w-3 h-3" />} />
            </div>
            <div className="flex items-center gap-2 md:gap-3 self-start lg:self-auto">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] rounded-md text-sm text-gray-300 transition-colors">
                <RefreshCw className="w-4 h-4" /> <span className="hidden sm:inline">Aktualisieren</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] rounded-md text-sm text-gray-300 transition-colors">
                <Download className="w-4 h-4" /> <span className="hidden sm:inline">Exportieren</span>
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-xs text-gray-500 mb-2">Schnellfilter zeigen Ergebnisse der aktuell geladenen Anrufe.</div>
            <div className="flex flex-wrap gap-2">
              <QuickFilter label="Datum und Uhrzeit" value="Ab dem 17.03.2026" valueColor="text-emerald-500" />
              <QuickFilter label="Kosten" />
              <QuickFilter label="Anrufart" />
              <QuickFilter label="Assistent" />
              <QuickFilter label="Vorübergehender Assistentenname" />
              <QuickFilter label="Team" />
              <QuickFilter label="Vorübergehender Teamname" />
              <QuickFilter label="Assistent-Rufnummer" />
              <QuickFilter label="Kunden-Rufnummer" />
              <QuickFilter label="Anruf-ID" />
              <QuickFilter label="Erfolgsbewertung" />
              <QuickFilter label="Beendegrund" />
              <QuickFilter label="Metadaten" />
              <QuickFilter label="Strukturierte Ausgaben" />
              <QuickFilter label="Score" />
              <QuickFilter label="Variable Werte des Assistenten" />
            </div>
          </div>
        </div>

        {/* Table / Card List */}
        <div className="flex-1 overflow-auto px-4 md:px-8 pb-24">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#262626] text-xs text-gray-500 font-medium">
                  <th className="py-3 px-2 w-10"><div className="w-4 h-4 border border-gray-600 rounded"></div></th>
                  <th className="py-3 px-2 w-10"></th>
                  <th className="py-3 px-4 font-medium tracking-wider">ANRUF-ID</th>
                  <th className="py-3 px-4 font-medium tracking-wider">ASSISTENT / TEAM</th>
                  <th className="py-3 px-4 font-medium tracking-wider">ASSISTENT-RUFNUMMER</th>
                  <th className="py-3 px-4 font-medium tracking-wider">KUNDEN-RUFNUMMER</th>
                  <th className="py-3 px-4 font-medium tracking-wider">TYP</th>
                  <th className="py-3 px-4 font-medium tracking-wider">BEENDEGRUND</th>
                  <th className="py-3 px-4 font-medium tracking-wider">ERFOLGSBEWERTUNG</th>
                  <th className="py-3 px-4 font-medium tracking-wider">SCORE</th>
                  <th className="py-3 px-4 font-medium tracking-wider flex items-center gap-1 cursor-pointer hover:text-gray-300">STARTZEIT <ChevronDown className="w-3 h-3" /></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {callsData.map((call, i) => (
                  <React.Fragment key={i}>
                    <tr 
                      className={`border-b border-[#1a1a1a] hover:bg-[#111111] transition-colors group cursor-pointer ${expandedCallId === call.id ? 'bg-[#111111]' : ''}`}
                      onClick={() => toggleExpand(call.id)}
                    >
                      <td className="py-3 px-2" onClick={(e) => e.stopPropagation()}>
                        <div className="w-4 h-4 border border-gray-600 rounded group-hover:border-gray-400 transition-colors"></div>
                      </td>
                      <td className="py-3 px-2">
                        <button 
                          onClick={(e) => togglePlay(e, call.id)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${playingCallId === call.id ? 'bg-emerald-500 text-black' : 'bg-[#262626] text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-500'}`}
                        >
                          {playingCallId === call.id ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                        </button>
                      </td>
                      <td className="py-3 px-4 text-gray-300 font-mono text-xs flex items-center gap-2">
                        {call.id}
                        {expandedCallId === call.id ? <ChevronDown className="w-3 h-3 text-gray-500" /> : <ChevronRight className="w-3 h-3 text-gray-500" />}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-gray-500" />
                          <div>
                            <div className="text-gray-200">{call.assistant}</div>
                            <div className="text-xs text-gray-500 font-mono">{call.assistantId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-gray-200">{call.assistantPhone}</div>
                        <div className="text-xs text-gray-500">{call.assistantPhoneName}</div>
                      </td>
                      <td className="py-3 px-4 text-gray-200">{call.customerPhone}</td>
                      <td className="py-3 px-4">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-medium">
                          <PhoneIncoming className="w-3 h-3" /> {call.type}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-emerald-500 text-xs">{call.endedReason}</span>
                      </td>
                      <td className="py-3 px-4 text-gray-500">{call.successEval}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          call.score === '100' ? 'text-emerald-500 bg-emerald-500/10' : 
                          call.score === '0' ? 'text-red-500 bg-red-500/10' : 'text-gray-500'
                        }`}>
                          {call.score}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-400 whitespace-nowrap">{call.startTime}</td>
                    </tr>
                    {expandedCallId === call.id && (
                      <tr className="bg-[#0f0f0f] border-b border-[#1a1a1a]">
                        <td colSpan={11} className="p-0">
                          <CallDetailsView call={call} playingCallId={playingCallId} progress={progress} togglePlay={togglePlay} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile / Tablet Card List */}
          <div className="lg:hidden flex flex-col gap-4">
            {callsData.map((call, i) => (
              <div key={i} className="bg-[#111111] border border-[#262626] rounded-lg overflow-hidden">
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => toggleExpand(call.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={(e) => togglePlay(e, call.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${playingCallId === call.id ? 'bg-emerald-500 text-black' : 'bg-[#262626] text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-500'}`}
                      >
                        {playingCallId === call.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                      </button>
                      <div>
                        <div className="text-sm font-medium text-gray-200">{call.customerPhone}</div>
                        <div className="text-xs text-gray-500 font-mono">{call.id}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{call.startTime.split(', ')[1]}</div>
                      <div className="text-xs text-gray-500">{call.startTime.split(', ')[0]}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mb-3">
                    <div>
                      <span className="text-xs text-gray-500 block">Assistant</span>
                      <span className="text-gray-300">{call.assistant}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Type</span>
                      <span className="text-emerald-500 text-xs">{call.type}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Ended Reason</span>
                      <span className="text-emerald-500 text-xs truncate block">{call.endedReason}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Score</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded inline-block ${
                        call.score === '100' ? 'text-emerald-500 bg-emerald-500/10' : 
                        call.score === '0' ? 'text-red-500 bg-red-500/10' : 'text-gray-500'
                      }`}>
                        {call.score}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-2">
                    {expandedCallId === call.id ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                  </div>
                </div>
                
                {expandedCallId === call.id && (
                  <div className="border-t border-[#262626] bg-[#0f0f0f]">
                    <CallDetailsView call={call} playingCallId={playingCallId} progress={progress} togglePlay={togglePlay} isMobile />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Composer Button */}
      <button className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#333] rounded-full text-sm font-medium text-gray-200 shadow-lg transition-all hover:scale-105">
        <Sparkles className="w-4 h-4 text-emerald-500" /> Composer
      </button>
      
      {/* Mobile Overlay Background */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

function CallDetailsView({ call, playingCallId, progress, togglePlay, isMobile = false }: { call: any, playingCallId: string | null, progress: number, togglePlay: (e: React.MouseEvent, id: string) => void, isMobile?: boolean }) {
  return (
    <div className={`p-4 md:p-6 ${isMobile ? '' : 'pl-16'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded">
            <span>{call.startTime}</span>
            <span>Eingehender Anruf</span>
          </div>
          <div className="bg-[#262626] text-gray-300 px-2 py-1 rounded text-xs">Assistent</div>
          <div className="flex items-center gap-1 text-gray-400">
            <Phone className="w-3 h-3" /> Kunde: {call.customerPhone}
          </div>
          <div className="text-gray-400">Beendet: {call.endedReason}</div>
        </div>
        <div className="flex items-center gap-4 text-xs md:text-sm text-gray-400">
          <div className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> Kosten: {call.cost}</div>
          <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> Dauer: {call.duration}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-mono">
        {call.fullId}
        <Copy className="w-3 h-3 cursor-pointer hover:text-gray-300" />
        <ExternalLink className="w-3 h-3 cursor-pointer hover:text-gray-300" />
      </div>

      {/* Recording Player */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-medium text-gray-200">Aufzeichnung</h3>
          <span className="text-sm text-gray-400 font-mono">01:37</span>
        </div>
        
        <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
          {/* Fake Waveform */}
          <div className="h-24 md:h-32 relative mb-4 flex items-center w-full overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              <div className="h-1/2 w-full flex items-end gap-[1px] md:gap-[2px] opacity-80">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={`top-${i}`} className="w-1 md:w-1.5 bg-orange-500/80 rounded-t-sm" style={{ height: `${Math.random() * 80 + 10}%` }}></div>
                ))}
              </div>
              <div className="h-1/2 w-full flex items-start gap-[1px] md:gap-[2px] opacity-80">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={`bot-${i}`} className="w-1 md:w-1.5 bg-emerald-500/80 rounded-b-sm" style={{ height: `${Math.random() * 60 + 5}%` }}></div>
                ))}
              </div>
            </div>
            
            {/* Playback Progress Overlay */}
            {playingCallId === call.id && (
              <div 
                className="absolute top-0 bottom-0 left-0 bg-white/10 border-r border-white/50 z-10 transition-all duration-1000 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
            
            {/* Time markers */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-500 font-mono px-2">
              <span>10</span><span>20</span><span>30</span><span>40</span><span>50</span><span>60</span><span>1:10</span><span>1:20</span><span>1:30</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button 
              onClick={(e) => togglePlay(e, call.id)}
              className="w-10 h-10 rounded-md bg-emerald-500 text-black flex items-center justify-center hover:bg-emerald-400 transition-colors shrink-0"
            >
              {playingCallId === call.id ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
            </button>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none items-center justify-center gap-2 px-3 py-1.5 bg-[#262626] hover:bg-[#333] border border-[#333] rounded-md text-xs text-gray-300 transition-colors flex">
                <Download className="w-3 h-3" /> Pcap
              </button>
              <button className="flex-1 sm:flex-none items-center justify-center gap-2 px-3 py-1.5 bg-[#262626] hover:bg-[#333] border border-[#333] rounded-md text-xs text-gray-300 transition-colors flex">
                <Download className="w-3 h-3" /> Audio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-sm border-b border-[#262626] mb-6 overflow-x-auto custom-scrollbar pb-1">
        <div className="flex items-center gap-2 text-emerald-400 border-b-2 border-emerald-400 pb-2 font-medium cursor-pointer whitespace-nowrap">
          <MessageSquare className="w-4 h-4" /> Transkripte
        </div>
        <div className="flex items-center gap-2 text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors whitespace-nowrap">
          <FileText className="w-4 h-4" /> Protokolle
        </div>
        <div className="flex items-center gap-2 text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors whitespace-nowrap">
          <Activity className="w-4 h-4" /> Analyse
        </div>
        <div className="flex items-center gap-2 text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors whitespace-nowrap">
          <FileJson className="w-4 h-4" /> Strukturierte Ausgaben
        </div>
      </div>

      {/* Transcript */}
      <div className="space-y-4">
        {call.transcript && call.transcript.length > 0 ? (
          call.transcript.map((msg: any, idx: number) => (
            <div key={idx} className={`flex flex-col ${msg.speaker === 'Nutzer' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] md:max-w-[75%] rounded-lg p-3 md:p-4 ${msg.speaker === 'Nutzer' ? 'bg-[#262626] text-gray-200' : 'bg-[#1a1a1a] border border-[#262626] text-gray-300'}`}>
                <div className={`text-xs mb-1 ${msg.speaker === 'Nutzer' ? 'text-gray-400' : 'text-emerald-500'}`}>
                  {msg.speaker}
                </div>
                <div className="text-sm leading-relaxed">{msg.text}</div>
              </div>
              <div className="text-[10px] text-gray-500 mt-1 font-mono flex items-center gap-2">
                {msg.time}
                {msg.speaker === 'Assistent' && <span className="cursor-pointer hover:text-gray-300">👎</span>}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 text-sm">
            Kein Transkript für diesen Anruf verfügbar.
          </div>
        )}
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, badge, hasChevron }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string, hasChevron?: boolean }) {
  return (
    <div className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer mb-0.5 transition-colors ${active ? 'bg-[#1a1a1a] text-white' : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-200'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className={`text-[10px] px-1.5 py-0.5 rounded ${badge === 'Alpha' ? 'bg-purple-500/20 text-purple-400' : 'bg-orange-500/20 text-orange-400'}`}>
            {badge}
          </span>
        )}
        {hasChevron && <ChevronDown className="w-4 h-4 text-gray-500" />}
      </div>
    </div>
  );
}

function FilterButton({ label, count, active, icon }: { label: string, count: number, active?: boolean, icon?: React.ReactNode }) {
  return (
    <button className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors border whitespace-nowrap ${
      active 
        ? 'bg-[#262626] border-[#333] text-gray-200' 
        : 'bg-transparent border-transparent text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-300'
    }`}>
      {icon && <span className="text-gray-500">{icon}</span>}
      {label}
      <span className={`px-1.5 py-0.5 rounded text-xs ${active ? 'bg-[#333] text-gray-300' : 'bg-[#1a1a1a] text-gray-500'}`}>
        {count}
      </span>
    </button>
  );
}

function QuickFilter({ label, value, valueColor }: { label: string, value?: string, valueColor?: string }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1 bg-transparent hover:bg-[#1a1a1a] border border-[#262626] rounded-full text-xs text-gray-400 transition-colors whitespace-nowrap">
      <PlusCircle className="w-3 h-3 text-gray-500" />
      <span>{label}</span>
      {value && (
        <>
          <span className="text-gray-600">|</span>
          <span className={valueColor || "text-gray-300"}>{value}</span>
        </>
      )}
    </button>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#262626] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-500" />
            <span className="font-bold text-lg text-white tracking-tight">AI Receptionist</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Funktionen</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Funktionsweise</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Preise</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="hidden md:flex text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Anmelden
            </Link>
            <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-200 text-black rounded-lg text-sm font-medium transition-colors">
              Zum Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#262626] text-emerald-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" /> Die Zukunft des Business
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
            Keinen Anruf mehr verpassen.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Klingt immer wie ein Mensch.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nutzen Sie eine intelligente KI-Telefonzentrale, die Anrufe entgegennimmt, Termine vereinbart und Kundenfragen rund um die Uhr beantwortet. Ideal für Arztpraxen, Salons und lokale Unternehmen.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link to="/dashboard" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]">
                Kostenlos testen
              </Link>
              <a href="tel:+3197010288157" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a1a] hover:bg-[#262626] border border-[#333] text-white rounded-xl font-medium text-lg transition-all hover:scale-105 active:scale-95">
                <Phone className="w-5 h-5" /> KI-Empfang anrufen
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Jetzt ausprobieren: <a href="tel:+3197010288157" className="text-emerald-400 font-mono hover:underline hover:text-emerald-300 transition-colors">+31 970 102 88157</a>
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Alles für Ihre Sprachautomatisierung</h2>
            <p className="text-gray-400">Leistungsstarke Funktionen für moderne Unternehmen, die Wert auf Kundenservice legen.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#0a0a0a] border border-[#262626] p-8 rounded-2xl hover:border-[#404040] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full transition-transform group-hover:scale-110" />
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rund um die Uhr erreichbar</h3>
              <p className="text-gray-400 leading-relaxed">
                Ihr Unternehmen schläft nie. Unsere KI nimmt jeden Anruf sofort entgegen – egal zu welcher Uhrzeit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0a0a0a] border border-[#262626] p-8 rounded-2xl hover:border-[#404040] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full transition-transform group-hover:scale-110" />
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligente Weiterleitung</h3>
              <p className="text-gray-400 leading-relaxed">
                Leitet komplexe Anfragen intelligent an die zuständigen Mitarbeiter weiter – inklusive aller Kontextinformationen.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0a0a0a] border border-[#262626] p-8 rounded-2xl hover:border-[#404040] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full transition-transform group-hover:scale-110" />
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sofortige Transkripte</h3>
              <p className="text-gray-400 leading-relaxed">
                Jeder Anruf wird automatisch protokolliert, transkribiert und für Ihr Dashboard analysiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#262626] py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-gray-400" />
            <span className="font-semibold text-gray-300">AI Receptionist</span>
          </div>
          <div>© 2026 AI Receptionist Inc. Alle Rechte vorbehalten.</div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
