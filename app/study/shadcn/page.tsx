// @/app/study/shadcn/page.tsx
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, XIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"

export default function ShadcnPage() {
    return (
        <div className="p-8">
            <div className="text-3xl">shadcn</div>
            <div className="text-2xl">UI Library</div>
            <div> 기존 UI 라이브러리와의 차이점 : 컴포넌트를 복사해서 내가 직접 수정하는 방식</div>
            <div> - open code </div>
            <div> - @/components/ui :  라이브러리 루트</div>
            <div> - components/json : 설정 파일</div>

            <div className="space-y-3">
                <div>
                    <div className="text-xl">Button</div>
                    <div className="space-y-3">
                        <Button variant="default">default</Button>
                        <Button variant="outline">outline</Button>
                        <Button variant="destructive">destructive</Button>
                        <Button variant="ghost">ghost</Button>
                        <Button variant="link">link</Button>
                        <Button variant="secondary">secondary</Button>
                        <Button variant="success">success</Button>
                        <Button variant="default" size="lg">default(lg)</Button>
                        <Button variant="outline" size="sm">outline(sm)</Button>
                        <Button variant="destructive" size="xs">destructive(xs)</Button>
                        <Button variant="ghost" size="icon"><Upload></Upload></Button>

                    </div>
                </div>
                <div>
                    <div className="text-xl"> Input</div>
                    <Input></Input>
                </div>
                <div>
                    <div className="space-y-3">
                        <div className="text-xl"> Card</div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>CardDesription CardDesription CardDesription</CardDescription>
                                <CardAction>
                                    <Button size="icon" variant="ghost"><XIcon></XIcon></Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <p> Cardcontent Cardcontent Cardcontent Cardcontent</p>
                            </CardContent>
                            <CardFooter>
                                <p>CardFooter CardFooter CardFooter</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <div>
                    <div className="space-y-3">
                        <div className="text-xl"> Dialog</div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div>
                    <div className="text-xl">Sonner</div>
                    <div className="space-x-3">
                        <Button onClick={() => { toast.info("토스트 눌렀다.") }}>info</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}