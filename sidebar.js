// 加载侧边栏内容
document.addEventListener('DOMContentLoaded', function() {
    // 获取侧边栏容器
    const sidebarContainer = document.getElementById('sidebar-container');
    
    if (sidebarContainer) {
        // 使用fetch加载侧边栏HTML
        fetch('sidebar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('无法加载侧边栏');
                }
                return response.text();
            })
            .then(html => {
                // 插入侧边栏HTML
                sidebarContainer.innerHTML = html;
                
                // 高亮当前页面
                highlightCurrentPage();
            })
            .catch(error => {
                console.error('加载侧边栏失败:', error);
                sidebarContainer.innerHTML = '<div class="text-center p-3 text-danger">侧边栏加载失败</div>';
            });
    }
    
    // 高亮当前页面菜单项
    function highlightCurrentPage() {
        // 获取当前页面URL
        const currentPage = window.location.pathname.split('/').pop();
        
        // 默认页面（如果URL是目录）
        const defaultPage = 'index.html';
        
        // 确定要高亮的页面
        const pageToHighlight = currentPage || defaultPage;
        
        // 移除所有激活状态
        const allMenuItems = document.querySelectorAll('.sidebar-menu li');
        allMenuItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // 根据当前页面设置激活状态
        let navItemId = '';
        
        if (pageToHighlight.includes('index')) {
            navItemId = 'nav-dashboard';
        } else if (pageToHighlight.includes('customer')) {
            navItemId = 'nav-customers';
        } else if (pageToHighlight.includes('inquir')) {
            navItemId = 'nav-inquiries';
        } else if (pageToHighlight.includes('quotation')) {
            navItemId = 'nav-quotations';
        } else if (pageToHighlight.includes('order')) {
            navItemId = 'nav-orders';
        } else if (pageToHighlight.includes('message')) {
            navItemId = 'nav-messages';
        } else if (pageToHighlight.includes('setting')) {
            navItemId = 'nav-settings';
        } else if (pageToHighlight.includes('login')) {
            navItemId = 'nav-logout';
        }
        
        // 添加激活类
        const activeNavItem = document.getElementById(navItemId);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }
}); 