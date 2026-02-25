document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('version.json');
        const data = await response.json();
        
        const versionBadge = document.createElement('div');
        versionBadge.className = 'fixed top-2 left-2 z-[9999] pointer-events-none select-none opacity-50 hover:opacity-100 transition-opacity';
        versionBadge.innerHTML = `
            <div class="bg-black/80 backdrop-blur-md text-white text-[9px] font-mono py-1 px-2 rounded-md border border-white/10 shadow-lg flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span class="font-bold tracking-widest text-amber-500 uppercase">BETA</span>
                <span class="text-slate-400">|</span>
                <span class="text-slate-300">v${data.version}</span>
            </div>
        `;
        
        document.body.appendChild(versionBadge);
        
        // Log no console para debug
        console.log(`%c ${data.appName} %c v${data.version} (${data.build}) `, 
            'background: #3b82f6; color: white; padding: 2px 4px; border-radius: 2px 0 0 2px;', 
            'background: #1e293b; color: white; padding: 2px 4px; border-radius: 0 2px 2px 0;'
        );
        
    } catch (error) {
        console.error('Erro ao carregar versão:', error);
    }
});