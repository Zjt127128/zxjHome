package com.happysnaker.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.happysnaker.mapper.UserMapper;
import com.happysnaker.pojo.User;
import com.happysnaker.service.LoginService;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;

/**
 * @author Happysnaker
 * @description
 * @date 2021/10/22
 * @email happysnaker@foxmail.com
 */
@Service
public class LoginServiceImpl implements LoginService {
    /**
     * APPID 和 密匙 换成你自己的
     */
    private final String URL = "https://api.weixin.qq.com/sns/jscode2session";
    private final String APP_ID = "wxe6b68327cdf05091";
    private final String SECRET = "2d51e35fd5ed0b5277036fdb7b7df076";
    private final String GRANT_TYPE = "authorization_code";

    private UserMapper userMapper;

    @Autowired
    public LoginServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public Map<String, String> getOpenId(String jsCode) {
        String url = URL;
        url += "?appid=" + APP_ID;
        url += "&secret=" + SECRET;
        url += "&js_code=" + jsCode;
        url += "&grant_type=" + GRANT_TYPE;
        url += "&connect_redirect=1";

        HttpClient client = HttpClients.createDefault();
        HttpPost post = new HttpPost(url);
        try {
            HttpResponse response = client.execute(post);
            HttpEntity entity = response.getEntity();
            Map obj = (Map) JSONObject.parse(EntityUtils.toString(entity));
            System.out.println(obj);
            String openId = (String) obj.get("openid");
            if (!userMapper.hasUser(openId)) {
                userMapper.addUser(new User(openId));
            }
            return obj;
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
