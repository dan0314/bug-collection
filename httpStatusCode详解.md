# Http Status Code 网页服务器HTTP响应状态的3位数字代码

<table>
    <tr>
        <th>1xx（临时响应）</th>
        <th colspan="2">表示临时响应并需要请求者继续执行操作的状态代码。</th>
    </tr>
    <tr>
        <td>100</td>
        <td>Continue（继续）</td>
        <td>请求者应当继续提出请求。 服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。</td>
    </tr>
    <tr>
        <td>101</td>
        <td>Switching Protocols（切换协议）</td>
        <td>请求者已要求服务器切换协议，服务器已确认并准备切换。</td>
    </tr>
    <tr>
        <th>2xx（成功）</th>
        <th colspan="2">表示成功处理了请求的状态代码。</th>
    </tr>
    <tr>
        <td>200</td>
        <td>OK（成功）</td>
        <td>服务器已成功处理了请求。通常，这表示服务器提供了请求的网页。</td>
    </tr>
    <tr>
        <td>201</td>
        <td> Created（已创建）</td>
        <td>请求成功并且服务器创建了新的资源。</td>
    </tr>
    <tr>
        <td>202</td>
        <td>Accepted（已接受）</td>
        <td>服务器已接受请求，但尚未处理。</td>
    </tr>
    <tr>
        <td>203</td>
        <td>Non-Authoritative Information（非授权信息）</td>
        <td>服务器已成功处理了请求，但返回的信息可能来自另一来源。</td>
    </tr>
    <tr>
        <td>203</td>
        <td>Non-Authoritative Information（非授权信息）</td>
        <td>服务器已成功处理了请求，但返回的信息可能来自另一来源。</td>
    </tr>
    <tr>
        <td>204</td>
        <td>No Content（无内容）</td>
        <td>服务器成功处理了请求，但没有返回任何内容。</td>
    </tr>
    <tr>
        <td>205</td>
        <td>Reset Content（重置内容）</td>
        <td>服务器成功处理了请求，但没有返回任何内容。</td>
    </tr>
    <tr>
        <td>206</td>
        <td>Partial Content（部分内容）</td>
        <td>服务器成功处理了部分 GET 请求。</td>
    </tr>
</table>