#!/usr/bin/env bash

echo "请输入提交的原因："
read REASON

if [ "$REASON"x = ""x ]; then
echo '请输入提交的原因'
exit 0
fi

cd public

npm run prd
cp -r src/view/msbank/edm dist/prd/

npm run uat
cp -r src/view/msbank/edm dist/uat/

#npm run sit
#cp -r src/view/msbank/edm dist/sit/

cd ../

git add *
git commit -m ${REASON}
git push origin master


curl http://brave:32c0c9e2ca58af91d3e7e8700c7f3353@server.5ftech.com:10000/job/touw/buildWithParameters?token=touw\&cause=${REASON}\&REASON=${REASON}