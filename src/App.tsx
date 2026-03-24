import React from 'react';
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
  PlusCircle,
  PanelLeftClose,
  User
} from 'lucide-react';

const callsData = [
  {
    id: "019d1df1...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (267) 259 3105",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "0",
    startTime: "Mar 24, 2026, 11:44"
  },
  {
    id: "019d1df0...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (267) 977 5048",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "0",
    startTime: "Mar 24, 2026, 11:43"
  },
  {
    id: "019d0217...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (202) 491 0902",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "0",
    startTime: "Mar 19, 2026, 01:56"
  },
  {
    id: "019d010d...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (717) 637 4394",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "100",
    startTime: "Mar 18, 2026, 21:05"
  },
  {
    id: "019d0057...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (717) 778 4536",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "N/A",
    startTime: "Mar 18, 2026, 17:46"
  },
  {
    id: "019d0053...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (717) 677 0077",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "N/A",
    startTime: "Mar 18, 2026, 17:42"
  },
  {
    id: "019cfbdc...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (412) 732 0186",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "N/A",
    startTime: "Mar 17, 2026, 20:53"
  },
  {
    id: "019cfbda...",
    assistant: "Ava",
    assistantId: "e961df35...",
    assistantPhone: "+1 (786) 751 8929",
    assistantPhoneName: "Ava Phone NUmber",
    customerPhone: "+1 (412) 232 3015",
    type: "Inbound",
    endedReason: "Customer Ended Call",
    successEval: "-",
    score: "N/A",
    startTime: "Mar 17, 2026, 20:50"
  }
];

export default function App() {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-gray-300 font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-[260px] flex-shrink-0 border-r border-[#262626] bg-[#0a0a0a] flex flex-col">
        <div className="p-4 flex items-center justify-between">
          <div className="font-bold text-xl text-white tracking-tight">cvcreation</div>
          <PanelLeftClose className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer" />
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
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
              <kbd className="bg-[#262626] rounded px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">⌘</kbd>
              <kbd className="bg-[#262626] rounded px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">K</kbd>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-3">
          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">VAPI LABS <span className="ml-1 text-[10px] font-normal border border-gray-700 rounded-full px-1.5 py-0.5">Info</span></div>
            <NavItem icon={<Sparkles className="w-4 h-4" />} label="Composer" badge="Alpha" />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">BUILD</div>
            <NavItem icon={<Bot className="w-4 h-4" />} label="Assistants" />
            <NavItem icon={<Users className="w-4 h-4" />} label="Squads" />
            <NavItem icon={<Wrench className="w-4 h-4" />} label="Tools" />
            <NavItem icon={<Phone className="w-4 h-4" />} label="Phone Numbers" />
            <NavItem icon={<Layers className="w-4 h-4" />} label="Resources" hasChevron />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">TEST</div>
            <NavItem icon={<CheckCircle2 className="w-4 h-4" />} label="Evals" badge="Beta" />
            <NavItem icon={<Beaker className="w-4 h-4" />} label="Test Suites" />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">OBSERVE</div>
            <NavItem icon={<FileText className="w-4 h-4" />} label="Logs" active />
            <NavItem icon={<BarChart2 className="w-4 h-4" />} label="Metrics" />
            <NavItem icon={<LayoutDashboard className="w-4 h-4" />} label="Boards" />
            <NavItem icon={<FileJson className="w-4 h-4" />} label="Structured Outputs" />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 tracking-wider">MANAGE</div>
            <NavItem icon={<Key className="w-4 h-4" />} label="API Keys" />
            <NavItem icon={<Blocks className="w-4 h-4" />} label="Integrations" />
          </div>
        </div>

        <div className="p-4 border-t border-[#262626]">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs text-gray-400">PAYG</span>
            <span className="text-sm text-gray-200 font-medium">7.00 <span className="text-xs text-gray-500 font-normal">Credits</span></span>
          </div>
          <button className="w-full py-2 bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] rounded-md text-sm font-medium text-gray-300 transition-colors flex items-center justify-center gap-2">
            <span className="text-emerald-500">↑</span> Buy Credits
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0a0a0a]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#262626]">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-gray-400" />
            <h1 className="text-xl font-semibold text-gray-200">Logs</h1>
            <span className="text-sm text-gray-500 ml-2">View and manage logs for your account.</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <div className="text-white border-b-2 border-white pb-2 font-medium cursor-pointer">Calls</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors">Chat</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors">Sessions</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors">Webhooks</div>
            <div className="text-gray-500 hover:text-gray-300 pb-2 cursor-pointer transition-colors">API</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-8 py-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FilterButton label="All Calls" count={8} active />
              <FilterButton label="Transferred" count={0} icon={<RefreshCw className="w-3 h-3" />} />
              <FilterButton label="Successful" count={7} icon={<CheckCircle2 className="w-3 h-3" />} />
              <FilterButton label="Failed" count={0} icon={<XCircle className="w-3 h-3" />} />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] rounded-md text-sm text-gray-300 transition-colors">
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] rounded-md text-sm text-gray-300 transition-colors">
                <Download className="w-4 h-4" /> Export
              </button>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-2">Quick filters show counts for currently loaded results only.</div>
            <div className="flex flex-wrap gap-2">
              <QuickFilter label="Date and Time" value="Starting from 03/17/2026" valueColor="text-emerald-500" />
              <QuickFilter label="Cost" />
              <QuickFilter label="Call Type" />
              <QuickFilter label="Assistant" />
              <QuickFilter label="Transient Assistant Name" />
              <QuickFilter label="Squad" />
              <QuickFilter label="Transient Squad Name" />
              <QuickFilter label="Assistant Phone Number" />
              <QuickFilter label="Customer Phone Number" />
              <QuickFilter label="Call ID" />
              <QuickFilter label="Success Evaluation" />
              <QuickFilter label="Ended Reason" />
              <QuickFilter label="Metadata" />
              <QuickFilter label="Structured Outputs" />
              <QuickFilter label="Score" />
              <QuickFilter label="Assistant Override Variable Values" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto px-8 pb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#262626] text-xs text-gray-500 font-medium">
                <th className="py-3 px-2 w-10"><div className="w-4 h-4 border border-gray-600 rounded"></div></th>
                <th className="py-3 px-4 font-medium tracking-wider">CALL ID</th>
                <th className="py-3 px-4 font-medium tracking-wider">ASSISTANT / SQUAD</th>
                <th className="py-3 px-4 font-medium tracking-wider">ASSISTANT PHONE NUMBER</th>
                <th className="py-3 px-4 font-medium tracking-wider">CUSTOMER PHONE NUMBER</th>
                <th className="py-3 px-4 font-medium tracking-wider">TYPE</th>
                <th className="py-3 px-4 font-medium tracking-wider">ENDED REASON</th>
                <th className="py-3 px-4 font-medium tracking-wider">SUCCESS EVALUATION</th>
                <th className="py-3 px-4 font-medium tracking-wider">SCORE</th>
                <th className="py-3 px-4 font-medium tracking-wider flex items-center gap-1 cursor-pointer hover:text-gray-300">START TIME <ChevronDown className="w-3 h-3" /></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {callsData.map((call, i) => (
                <tr key={i} className="border-b border-[#1a1a1a] hover:bg-[#111111] transition-colors group">
                  <td className="py-3 px-2"><div className="w-4 h-4 border border-gray-600 rounded group-hover:border-gray-400 transition-colors"></div></td>
                  <td className="py-3 px-4 text-gray-300 font-mono text-xs">{call.id}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Floating Composer Button */}
      <button className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#333] rounded-full text-sm font-medium text-gray-200 shadow-lg transition-all hover:scale-105">
        <Sparkles className="w-4 h-4 text-emerald-500" /> Composer
      </button>
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
    <button className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors border ${
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
    <button className="flex items-center gap-1.5 px-2.5 py-1 bg-transparent hover:bg-[#1a1a1a] border border-[#262626] rounded-full text-xs text-gray-400 transition-colors">
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
