package com.swiot.permission;


import com.gccloud.common.permission.IApiPermissionService;
import com.swiot.common.core.domain.model.LoginUser;
import com.swiot.common.utils.SecurityUtils;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

/**
 * @author dataroom
 * @version 1.0
 * @date 2023/10/20 10:26
 */
@Service
public class PermissionServiceImpl implements IApiPermissionService {

    @Override
    public boolean verifyApiPermission(HttpServletRequest request, String... permission) {
        // 获取当前用户的权限
        LoginUser loginUser = SecurityUtils.getLoginUser();
        Set<String> permissions = loginUser.getPermissions();
        System.out.println("loginUser"+loginUser);
        System.out.println("permissions"+permissions);
        if (permissions.contains("*:*:*")) {
            // 若依的全部权限标识
            return true;
        }
        // 判断当前用户是否拥有对应的权限
        for (String s : permission) {
            if (!permissions.contains(s)) {
                return false;
            }
        }
        // 返回值true标识校验通过
        return true;
    }
}


