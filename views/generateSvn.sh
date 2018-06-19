#!/usr/bin/env bash


echo "请输入项目名称："
read PROJECT



#处理dist
mkdir -p /tmp/igi/dist/${PROJECT}
mkdir -p /tmp/igi/dist/${PROJECT}_sit
mkdir -p /tmp/igi/dist/${PROJECT}_uat

cd /tmp/igi/dist/
svn add ${PROJECT}*
svn ci -m '提交' ${PROJECT}*

mkdir -p /mnt/build/${PROJECT}/${PROJECT}_sit
mkdir -p /mnt/build/${PROJECT}/${PROJECT}_uat
mkdir -p /mnt/build/${PROJECT}/${PROJECT}_prd
svn co https://hms-sit.test-cignacmb.com/svn/5ftech_web/trunk/igi/dist/${PROJECT} /mnt/build/${PROJECT}/${PROJECT}_prd
svn co https://hms-sit.test-cignacmb.com/svn/5ftech_web/trunk/igi/dist/${PROJECT}_sit /mnt/build/${PROJECT}/${PROJECT}_sit
svn co https://hms-sit.test-cignacmb.com/svn/5ftech_web/trunk/igi/dist/${PROJECT}_uat /mnt/build/${PROJECT}/${PROJECT}_uat
# end 处理dist





# 处理src
mkdir -p /tmp/igi/src/${PROJECT}
cd /tmp/igi/src/
svn add ${PROJECT}*
svn ci -m '提交' ${PROJECT}*

mkdir -p /mnt/build/${PROJECT}/${PROJECT}
svn co https://hms-sit.test-cignacmb.com/svn/5ftech_web/trunk/igi/src/${PROJECT} /mnt/build/${PROJECT}/${PROJECT}
# end 处理src



