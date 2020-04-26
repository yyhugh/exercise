var list =
[
    "h3",
    "h2", "h3",
    "h1", "h2", "h3", "h3", "h2", "h3",
    "h1", "h2", "h4", "h2", "h3"
];

// 通过对比后一位进行递归操作

// 当前项与下一项的对比情况
// 1、等于。表示同级
// 2、小于。表示子级
// 3、大于。表示父级


// function handler(params)
// {
//     const list = [...params];

//     // 先拿出首位
//     const target = list.shift();

//     list.forEach(item =>
//     {
//         if (toNumber(target) === toNumber(item))
//         {
//             // 同级节点
//         }
//         else if (toNumber(target) < toNumber(item))
//         {
//             // 下级节点
//         }
//         else
//         {
//             // 上一级节点
//         }
//     });
// }

// function toNumber(str)
// {
//     return Number.parseInt(str.slice(1));
// }

// list2Tree(list);
