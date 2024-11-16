package com.swiot.permission;

import com.gccloud.dataroom.core.permission.IDataRoomPermissionService;
import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import com.swiot.permission.service.CodeBigScreenPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.swiot.common.utils.SecurityUtils.getUsername;

/**
 * @author gcpaas
 * @version 1.0
 * @date 2023/9/11 16:21
 */
@Service
public class CodePermissionServiceImpl implements IDataRoomPermissionService {
    @Autowired
    private CodeBigScreenPageService bigScreenPageService;
    /**
     * 在大屏分页查询时会调用，可在该方法中根据用户标识到关联表中查询出用户有权限的大屏编码列表，
     * 然后根据该列表将入参的大屏编码列表过滤，只保留有权限的部分
     */
    @Override
    public List<String> filterByPermission(List<String> allCode) {
        // 入参allCode是原先符合大屏查询条件的大屏code列表
        // 模拟根据当前用户有权限的大屏编码列表过滤allCode，需要根据实际情况自行实现
        allCode.retainAll(this.getUserDataRoomCodeList());
        return allCode;
    }


    private List<String> getUserDataRoomCodeList() {
        List<String> res = bigScreenPageService.getUserDataRoomCodeListByCreateBy(getUsername());
//        System.out.println("该用户被允许的code："+res);
        // 模拟获取当前用户有权限的大屏code列表，需要根据实际情况自行实现
        return res;
//        return Lists.newArrayList("bigScreen_e5M4VCavPT","bigScreen_NGIL5aDXxM");
    }
    // 参数pageCode即为大屏页面的编码，在设计大屏时可在路由code参数中看到
    @Override
    public boolean verifyDataPermission(HttpServletRequest request, String pageCode) {
        // 获取当前登录用户可访问的大屏页面编码列表
        Set<String> pageCodes = getUserPages();
        return pageCodes.contains(pageCode);
    }

    // 该方法模拟获取当前登录用户可访问大屏页面的编码列表，具体实现需要根据实际项目自行修改
    private Set<String> getUserPages() {
        List<String> res = bigScreenPageService.getUserDataRoomCodeListByCreateBy(getUsername());
//        Set<String> pageCodes = Sets.newHashSet("bigScreen_e5M4VCavPT","bigScreen_NGIL5aDXxM");
        // 将 List 转换为 Set
        Set<String> pageCodes = new HashSet<>(res);
        return pageCodes;
    }
}
